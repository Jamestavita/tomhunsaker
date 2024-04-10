import NodeMailer from "../config/nodeMailer.js";
import ExecutionUsers from "../models/executionUsersModel.js";
import InnovationUsers from "../models/innovationUsersModel.js";
import MindsetUsers from "../models/mindsetUsersModel.js";
import StrategyUsers from "../models/strategyUsersModel.js";

export const createMindsetUser = async (req, res) => {
  try {
    const {
      name,
      last_name,
      email,
      user_info,
      assessment_info,
      points,
      total_score,
      level,
      plan,
    } = req.body;

    const data = await MindsetUsers.create({
      name,
      last_name,
      email,
      user_info,
      assessment_info,
      points,
      total_score,
      level,
      plan,
    });

    if (plan === "Free")
      NodeMailer({
        name,
        email,
        assessment_info,
        concept: "Mindset",
        level,
        plan,
      });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

//Get user assessment info
export const getAssessmentInfo = async (req, res) => {
  try {
    const { concept, name, id } = req.query;

    let conceptModel;
    switch (concept) {
      case "Mindset":
        conceptModel = MindsetUsers;
        break;
      case "Strategy":
        conceptModel = StrategyUsers;
        break;
      case "Innovation":
        conceptModel = InnovationUsers;
        break;
      case "Execution":
        conceptModel = ExecutionUsers;
        break;
      default:
        conceptModel = "Hey";
    }

    const data = await conceptModel.findOne({
      _id: id,
      name,
    });

    if (!data) throw new Error("Could not find this user");

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
