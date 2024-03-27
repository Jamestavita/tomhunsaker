import NodeMailer from "../config/nodeMailer.js";
import InnovationUsers from "../models/innovationUsersModel.js";

export const createInnovationUser = async (req, res) => {
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

    const data = await InnovationUsers.create({
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
        concept: "Innovation",
        level,
        plan,
      });


    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
