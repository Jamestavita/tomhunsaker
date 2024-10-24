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

    let levelImage;
    switch (true) {
      case level === 1:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/3e2d44d6-f327-90a7-6eee-93f4525a1a9d.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/dc8f72a5-c8a9-06d5-1669-d24fe3cc496c.png",
        };
        break;
      case level === 2:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0b227d6d-a4fb-f47e-c7e8-8420c7f596b7.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/fdf77671-3f84-fc5d-ad6a-644472f37f1d.png",
        };
        break;
      case level === 3:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/6a6ea2a5-57d3-e3ad-c1e9-38346b74d49e.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/c25463a6-96f8-69ba-749c-3a474436aa43.png",
        };
        break;
      case level === 4:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/c9ac3663-5d76-8b8c-b25f-9d46cd62fbd0.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/3e60aabd-526c-b8e2-a453-81966c4eb613.png",
        };
        break;
      case level === 5:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/d7df5de8-2cee-6659-ba97-b3d567d338c7.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/99f19b4d-cca8-a2e0-af79-715f26a6e258.png",
        };
        break;
      default:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/3e2d44d6-f327-90a7-6eee-93f4525a1a9d.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/dc8f72a5-c8a9-06d5-1669-d24fe3cc496c.png",
        };
        break;
    }

    if (plan === "Free")
      NodeMailer({
        name,
        email,
        assessment_info,
        concept: "Innovation",
        level: levelImage,
        plan,
      });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
