import express from "express";
import { createMindsetUser } from "../controllers/mindsetUsersController.js";

const mindsetUsersRoute = express.Router();

mindsetUsersRoute.post("/create_user", createMindsetUser);

export default mindsetUsersRoute;
