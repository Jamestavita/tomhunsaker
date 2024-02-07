import Stripe from "stripe";
import express from "express";
import dotenv from "dotenv";
import Founders from "../models/foundersModel.js";
import NodeMailer from "./nodeMailer.js";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

export const stripeRouter = express.Router();

//Checkout
stripeRouter.post("/create-checkout-session", async (req, res) => {
  const { name, email, founderInfo } = req.body;

  const customer = await stripe.customers.create({
    metadata: {
      name,
      email,
      founderInfo: JSON.stringify(founderInfo),
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Founders GROWTH Report",
            description: "Your premier business attractiveness scorecard",
          },
          unit_amount: (26 * 100).toFixed(0),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.CANCEL_URL,
  });

  res.json({ url: session.url });
});

//Webhook
const endpointSecret = process.env.STRIPE_SECRET;
stripeRouter.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        request.rawBody,
        sig,
        endpointSecret
      );
      console.log("Webhook verified");
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        const {
          id,
          amount_subtotal,
          amount_total,
          created,
          currency,
          customer,
          customer_details,
          payment_method_types,
          payment_status,
          total_details,
        } = checkoutSessionCompleted;

        const session = await stripe.checkout.sessions.retrieve(
          checkoutSessionCompleted.id,
          {
            expand: ["customer"],
          }
        );

        const founder = await Founders.findOne({
          name: session.customer.metadata.name,
          email: session.customer.metadata.email,
        });

        founder.plan = "Premium";
        founder.paymentInfo = {
          session_id: id,
          amount_subtotal,
          amount_total,
          created,
          currency,
          customer,
          customer_details,
          payment_method_types,
          payment_status,
          total_details,
        };

        await founder.save();
        NodeMailer({
          name: founder.name,
          email: founder.email,
          level: founder.level,
          plan: "Premium",
        });

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.send().end();
  }
);
