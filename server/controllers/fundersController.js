import Funders from "../models/fundersModel.js";

export const addFunder = async (req, res) => {
  try {
    const { name, email, funderInfo, assessmentInfo } = req.body;

    const data = await Funders.create({
      name,
      email,
      funderInfo,
      assessmentInfo,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
