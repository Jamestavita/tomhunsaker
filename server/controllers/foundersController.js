import NodeMailer from "../config/nodeMailer.js";
import Founders from "../models/foundersModel.js";

export const addFounder = async (req, res) => {
  try {
    const { name, email, founderInfo, assessmentInfo, score, level, plan } =
      req.body;

    const data = await Founders.create({
      name,
      email,
      founderInfo,
      assessmentInfo,
      score,
      level,
      plan,
    });

    if (plan === "Free") NodeMailer({ name, email, level, plan });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
