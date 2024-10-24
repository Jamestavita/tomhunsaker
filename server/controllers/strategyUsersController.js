import NodeMailer from "../config/nodeMailer.js";
import StrategyUsers from "../models/strategyUsersModel.js";

export const createStrategyUser = async (req, res) => {
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

    const data = await StrategyUsers.create({
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
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0e7cdcdd-eb14-619a-0875-e7cd8bd59dac.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/68dbb0a0-5eb8-064c-0aea-b963556db4dc.png",
        };
        break;
      case level === 2:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/db5e1579-26ca-316e-1a4f-a6315ee0ddae.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/ebb57886-7044-cb5a-8925-e1c7a76f8ae1.png",
        };
        break;
      case level === 3:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5d3114ea-08ad-e631-51e6-d349882b3122.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/f79540b5-4318-b8b5-5baa-cb8195983003.png",
        };
        break;
      case level === 4:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/83fc900e-710f-e19e-2b47-b717046177f4.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/f79540b5-4318-b8b5-5baa-cb8195983003.png",
        };
        break;
      case level === 5:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/ef6c74cf-be94-a4d2-f2f8-70dc8c78c3d8.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/45a890f5-28fc-1da1-f240-beb702a63579.png",
        };
        break;
      default:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/0e7cdcdd-eb14-619a-0875-e7cd8bd59dac.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/68dbb0a0-5eb8-064c-0aea-b963556db4dc.png",
        };
        break;
    }

    if (plan === "Free")
      NodeMailer({
        name,
        email,
        assessment_info,
        concept: "Strategy",
        level: levelImage,
        plan,
      });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
