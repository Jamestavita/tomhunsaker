import express from "express";
import { createStrategyUser } from "../controllers/strategyUsersController.js";

const strategyUsersRoute = express.Router();

strategyUsersRoute.post("/create_user", createStrategyUser);

export default strategyUsersRoute;
