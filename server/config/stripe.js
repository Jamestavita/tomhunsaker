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

        let levelImage = {};
        switch (true) {
          case mindsetUser.level === 1:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5b1911f0-6cc4-e8a4-fac3-06f17b608d8a.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0aa76ff5-9105-e493-f4f1-de2a22a0ffff.png",
            };
            break;
          case mindsetUser.level === 2:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/9e3c49b5-556d-66c7-a8e9-9ffb64d22695.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/76b2dafe-9366-cfb1-7787-cbbc7ea0ed3d.png",
            };
            break;
          case mindsetUser.level === 3:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/e0c9ebae-2423-ede3-bbd3-79e7514d1c9c.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/fa2b849b-2c63-dd27-723d-dec89a42275e.png",
            };
            break;
          case mindsetUser.level === 4:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/b145599d-b54d-647a-26f8-722d7e701e5f.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/36609bba-6ced-f589-f9f0-b52945cca5d7.png",
            };
            break;
          case mindsetUser.level === 5:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/8f3f6dec-0cd2-1dd5-ff56-2a55a884db88.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/77440b0e-bfe1-79ff-5943-d05577d78684.png",
            };
            break;
          default:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5b1911f0-6cc4-e8a4-fac3-06f17b608d8a.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0aa76ff5-9105-e493-f4f1-de2a22a0ffff.png",
            };
            break;
        }

        await mindsetUser.save();
        NodeMailer({
          id: mindsetUser._id,
          name: mindsetUser.name,
          email: mindsetUser.email,
          concept: "Mindset",
          level: levelImage,
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

        let levelImage = {};
        switch (true) {
          case strategyUser.level === 1:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0e7cdcdd-eb14-619a-0875-e7cd8bd59dac.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/68dbb0a0-5eb8-064c-0aea-b963556db4dc.png",
            };
            break;
          case strategyUser.level === 2:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/db5e1579-26ca-316e-1a4f-a6315ee0ddae.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/ebb57886-7044-cb5a-8925-e1c7a76f8ae1.png",
            };
            break;
          case strategyUser.level === 3:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5d3114ea-08ad-e631-51e6-d349882b3122.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/f79540b5-4318-b8b5-5baa-cb8195983003.png",
            };
            break;
          case strategyUser.level === 4:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/83fc900e-710f-e19e-2b47-b717046177f4.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/f79540b5-4318-b8b5-5baa-cb8195983003.png",
            };
            break;
          case strategyUser.level === 5:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/ef6c74cf-be94-a4d2-f2f8-70dc8c78c3d8.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/45a890f5-28fc-1da1-f240-beb702a63579.png",
            };
            break;
          default:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0e7cdcdd-eb14-619a-0875-e7cd8bd59dac.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/68dbb0a0-5eb8-064c-0aea-b963556db4dc.png",
            };
            break;
        }

        await strategyUser.save();
        NodeMailer({
          id: strategyUser._id,
          name: strategyUser.name,
          email: strategyUser.email,
          concept: "Strategy",
          level: levelImage,
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

        let levelImage = {};
        switch (true) {
          case innovationUser.level === 1:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/3e2d44d6-f327-90a7-6eee-93f4525a1a9d.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/dc8f72a5-c8a9-06d5-1669-d24fe3cc496c.png",
            };
            break;
          case innovationUser.level === 2:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0b227d6d-a4fb-f47e-c7e8-8420c7f596b7.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/fdf77671-3f84-fc5d-ad6a-644472f37f1d.png",
            };
            break;
          case innovationUser.level === 3:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/6a6ea2a5-57d3-e3ad-c1e9-38346b74d49e.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/c25463a6-96f8-69ba-749c-3a474436aa43.png",
            };
            break;
          case innovationUser.level === 4:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/c9ac3663-5d76-8b8c-b25f-9d46cd62fbd0.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/3e60aabd-526c-b8e2-a453-81966c4eb613.png",
            };
            break;
          case innovationUser.level === 5:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/d7df5de8-2cee-6659-ba97-b3d567d338c7.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/99f19b4d-cca8-a2e0-af79-715f26a6e258.png",
            };
            break;
          default:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/3e2d44d6-f327-90a7-6eee-93f4525a1a9d.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/dc8f72a5-c8a9-06d5-1669-d24fe3cc496c.png",
            };
            break;
        }

        await innovationUser.save();
        NodeMailer({
          id: innovationUser._id,
          name: innovationUser.name,
          email: innovationUser.email,
          concept: "Innovation",
          level: levelImage,
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

        let levelImage = {};
        switch (true) {
          case executionUser.level === 1:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/49381b9c-8858-4756-679e-231384b5ebd5.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/bd242c9c-4ee3-8de6-b3bf-3d36df0df1d5.png",
            };
            break;
          case executionUser.level === 2:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/cf9a701b-28de-5135-2d72-4d435b624052.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/74e746e0-09dd-d416-2c63-07502136d3b7.png",
            };
            break;
          case executionUser.level === 3:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/22c26898-57ae-5042-3f7f-9da1eb379c16.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/b7b72522-c607-a7ab-a3ba-66d5311ef188.png",
            };
            break;
          case executionUser.level === 4:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/663f12a9-6775-0d93-85a7-c04108c54935.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5deb2a6b-6ff9-3c2f-010c-fb831d470c4b.png",
            };
            break;
          case executionUser.level === 5:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/8eb09866-8222-2e69-78e9-1b6baff90a20.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/9212b95a-c41d-63be-c618-a764b1e884ab.png",
            };
            break;
          default:
            levelImage = {
              desktop:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/49381b9c-8858-4756-679e-231384b5ebd5.png",
              mobile:
                "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/bd242c9c-4ee3-8de6-b3bf-3d36df0df1d5.png",
            };
            break;
        }

        await executionUser.save();
        NodeMailer({
          id: executionUser._id,
          name: executionUser.name,
          email: executionUser.email,
          concept: "Execution",
          level: levelImage,
          plan: "Premium",
        });

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.send().end();
  }
);
