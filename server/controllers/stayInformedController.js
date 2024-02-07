import StayInformed from "../models/stayInformedModel.js";

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const data = await StayInformed.create({
      email,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
