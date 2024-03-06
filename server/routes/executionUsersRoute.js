import express from "express";
import { createExecutionUser } from "../controllers/executionUsersController.js";

const executionUsersRoute = express.Router();

executionUsersRoute.post("/create_user", createExecutionUser);

export default executionUsersRoute;
