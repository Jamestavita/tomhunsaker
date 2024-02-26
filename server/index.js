import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongoose.js";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { stripeRouter } from "./config/stripe.js";
import stayInformedRoute from "./routes/stayInformedRoute.js";
import mindsetUsersRoute from "./routes/mindsetUsersRoute.js";

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
app.use("/api/stripe", stripeRouter);
app.use("/api/subscribe", stayInformedRoute);

const PORT = process.env.PORT;
server.listen(PORT || 5000, console.log(`Server is running on ${PORT}`));
