import NodeMailer from "../config/nodeMailer.js";
import MindsetUsers from "../models/mindsetUsersModel.js";

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
