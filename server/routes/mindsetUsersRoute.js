import express from "express";
import {
  createMindsetUser,
  getAssessmentInfo,
} from "../controllers/mindsetUsersController.js";

const mindsetUsersRoute = express.Router();

mindsetUsersRoute.post("/create_user", createMindsetUser);

export default mindsetUsersRoute;

//Get user assessment info
export const usersRoute = express.Router();
usersRoute.get("/", getAssessmentInfo);
