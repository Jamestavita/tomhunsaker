import express from "express";
import { addFounder } from "../controllers/foundersController.js";

const foundersRoute = express.Router();

foundersRoute.post("/founder_create", addFounder);

export default foundersRoute;
