import express from "express";
import { createInnovationUser } from "../controllers/innovationUsersController.js";

const innovationUsersRoute = express.Router();

innovationUsersRoute.post("/create_user", createInnovationUser);

export default innovationUsersRoute;
