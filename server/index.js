import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongoose.js";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import {
  stripeRouter_strategy,
  stripeRouter_mindset,
  stripeRouter_innovation,
  stripeRouter_execution,
} from "./config/stripe.js";
import stayInformedRoute from "./routes/stayInformedRoute.js";
import mindsetUsersRoute from "./routes/mindsetUsersRoute.js";
import strategyUsersRoute from "./routes/strategyUsersRoute.js";
import innovationUsersRoute from "./routes/innovationUsersRoute.js";
import executionUsersRoute from "./routes/executionUsersRoute.js";

dotenv.config();
connectDB();
const app = express();
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf;
    },
    limit: "50mb",
    extended: true,
  })
);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://glo-raise.netlify.app"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    optionSuccessStatus: 204,
    preflightContinue: false,
  })
);
const server = http.createServer(app);

//Api Routes
app.use("/api/mindset", mindsetUsersRoute);
app.use("/api/strategy", strategyUsersRoute);
app.use("/api/innovation", innovationUsersRoute);
app.use("/api/execution", executionUsersRoute);
app.use("/api/mindset/stripe", stripeRouter_mindset);
app.use("/api/strategy/stripe", stripeRouter_strategy);
app.use("/api/innovation/stripe", stripeRouter_innovation);
app.use("/api/execution/stripe", stripeRouter_execution);
app.use("/api/subscribe", stayInformedRoute);

const PORT = process.env.PORT;
server.listen(PORT || 5000, console.log(`Server is running on ${PORT}`));
