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

    let levelImage;

    switch (true) {
      case level === 1:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5b1911f0-6cc4-e8a4-fac3-06f17b608d8a.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0aa76ff5-9105-e493-f4f1-de2a22a0ffff.png",
        };
        break;
      case level === 2:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/9e3c49b5-556d-66c7-a8e9-9ffb64d22695.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/76b2dafe-9366-cfb1-7787-cbbc7ea0ed3d.png",
        };
        break;
      case level === 3:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/e0c9ebae-2423-ede3-bbd3-79e7514d1c9c.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/fa2b849b-2c63-dd27-723d-dec89a42275e.png",
        };
        break;
      case level === 4:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/b145599d-b54d-647a-26f8-722d7e701e5f.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/36609bba-6ced-f589-f9f0-b52945cca5d7.png",
        };
        break;
      case level === 5:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/8f3f6dec-0cd2-1dd5-ff56-2a55a884db88.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/77440b0e-bfe1-79ff-5943-d05577d78684.png",
        };
        break;
      default:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5b1911f0-6cc4-e8a4-fac3-06f17b608d8a.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0aa76ff5-9105-e493-f4f1-de2a22a0ffff.png",
        };
        break;
    }

    if (plan === "Free")
      NodeMailer({
        name,
        email,
        assessment_info,
        concept: "Mindset",
        level: levelImage,
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
