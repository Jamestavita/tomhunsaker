import express from "express";
import { addFunder } from "../controllers/fundersController.js";

const fundersRoute = express.Router();

//Get product reviews
fundersRoute.post("/funder_create", addFunder);

export default fundersRoute;
