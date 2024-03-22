import express from "express";
import { createSubscriber } from "../controllers/subscriberController.js";

const subscriberRoute = express.Router();

subscriberRoute.post("/create", createSubscriber);

export default subscriberRoute;
