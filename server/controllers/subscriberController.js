import Subscriber from "../models/subscriberModel.js";

export const createSubscriber = async (req, res) => {
  try {
    const { name, organization, email } = req.body;

    const data = await Subscriber.create({
      name,
      organization,
      email,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
