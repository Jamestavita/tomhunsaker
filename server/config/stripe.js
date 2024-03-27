import Stripe from "stripe";
import express from "express";
import dotenv from "dotenv";
import NodeMailer from "./nodeMailer.js";
import MindsetUsers from "../models/mindsetUsersModel.js";
import StrategyUsers from "../models/strategyUsersModel.js";
import InnovationUsers from "../models/innovationUsersModel.js";
import ExecutionUsers from "../models/executionUsersModel.js";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);
const endpointSecret = process.env.STRIPE_SECRET;
export const stripeRouter_mindset = express.Router();
export const stripeRouter_strategy = express.Router();
export const stripeRouter_innovation = express.Router();
export const stripeRouter_execution = express.Router();

//-----------Mindset Checkout----------------
stripeRouter_mindset.post("/create-checkout-session", async (req, res) => {
  const { name, email } = req.body;

  const customer = await stripe.customers.create({
    metadata: {
      name,
      email,
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Mindset & Culture SHAPER Report",
            description: "Your premier business attractiveness scorecard",
          },
          unit_amount: (49 * 100).toFixed(0),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.SUCCESS_URL}/mindset/paid_success`,
    cancel_url: `${process.env.CANCEL_URL}/mindset/paid`,
  });

  res.json({ url: session.url });
});

//mindset Webhook
stripeRouter_mindset.post(
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

        const mindsetUser = await MindsetUsers.findOne({
          name: session.customer.metadata.name,
          email: session.customer.metadata.email,
        });

        mindsetUser.plan = "Premium";
        mindsetUser.paymentInfo = {
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

        await mindsetUser.save();
        NodeMailer({
          name: mindsetUser.name,
          email: mindsetUser.email,
          assessment_info: mindsetUser.assessment_info,
          concept: "Mindset",
          level: mindsetUser.level,
          plan: "Premium",
        });

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.send().end();
  }
);

//-----------Strategy Checkout----------------
stripeRouter_strategy.post("/create-checkout-session", async (req, res) => {
  const { name, email } = req.body;

  const customer = await stripe.customers.create({
    metadata: {
      name,
      email,
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Strategy & Change FRAMER Report",
            description: "Your premier business attractiveness scorecard",
          },
          unit_amount: (49 * 100).toFixed(0),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.SUCCESS_URL}/strategy/paid_success`,
    cancel_url: `${process.env.CANCEL_URL}/strategy/paid`,
  });

  res.json({ url: session.url });
});

//strategy Webhook
stripeRouter_strategy.post(
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

        const strategyUser = await StrategyUsers.findOne({
          name: session.customer.metadata.name,
          email: session.customer.metadata.email,
        });

        strategyUser.plan = "Premium";
        strategyUser.paymentInfo = {
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

        await strategyUser.save();
        NodeMailer({
          name: strategyUser.name,
          email: strategyUser.email,
          assessment_info: strategyUser.assessment_info,
          concept: "Strategy",
          level: strategyUser.level,
          plan: "Premium",
        });

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.send().end();
  }
);

//------------Innovation Checkout-------------------
stripeRouter_innovation.post("/create-checkout-session", async (req, res) => {
  const { name, email } = req.body;

  const customer = await stripe.customers.create({
    metadata: {
      name,
      email,
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Innovation & Analytics BRIDGER Report",
            description: "Your premier business attractiveness scorecard",
          },
          unit_amount: (49 * 100).toFixed(0),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.SUCCESS_URL}/innovation/paid_success`,
    cancel_url: `${process.env.CANCEL_URL}/innovation/paid`,
  });

  res.json({ url: session.url });
});

//innovation Webhook
stripeRouter_innovation.post(
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

        const innovationUser = await InnovationUsers.findOne({
          name: session.customer.metadata.name,
          email: session.customer.metadata.email,
        });

        innovationUser.plan = "Premium";
        innovationUser.paymentInfo = {
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

        await innovationUser.save();
        NodeMailer({
          name: innovationUser.name,
          email: innovationUser.email,
          assessment_info: innovationUser.assessment_info,
          concept: "Innovation",
          level: innovationUser.level,
          plan: "Premium",
        });

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.send().end();
  }
);

//------------Execution Checkout-------------------
stripeRouter_execution.post("/create-checkout-session", async (req, res) => {
  const { name, email } = req.body;

  const customer = await stripe.customers.create({
    metadata: {
      name,
      email,
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Execution & Analytics AMPLIFIER Report",
            description: "Your premier business attractiveness scorecard",
          },
          unit_amount: (49 * 100).toFixed(0),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.SUCCESS_URL}/execution/paid_success`,
    cancel_url: `${process.env.CANCEL_URL}/execution/paid`,
  });

  res.json({ url: session.url });
});

//Execution Webhook
stripeRouter_execution.post(
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

        const executionUser = await ExecutionUsers.findOne({
          name: session.customer.metadata.name,
          email: session.customer.metadata.email,
        });

        executionUser.plan = "Premium";
        executionUser.paymentInfo = {
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

        await executionUser.save();
        NodeMailer({
          name: executionUser.name,
          email: executionUser.email,
          assessment_info: executionUser.assessment_info,
          concept: "Execution",
          level: executionUser.level,
          plan: "Premium",
        });

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.send().end();
  }
);
