import NodeMailer from "../config/nodeMailer.js";
import ExecutionUsers from "../models/executionUsersModel.js";

export const createExecutionUser = async (req, res) => {
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

    const data = await ExecutionUsers.create({
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
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/49381b9c-8858-4756-679e-231384b5ebd5.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/bd242c9c-4ee3-8de6-b3bf-3d36df0df1d5.png",
        };
        break;
      case level === 2:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/cf9a701b-28de-5135-2d72-4d435b624052.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/74e746e0-09dd-d416-2c63-07502136d3b7.png",
        };
        break;
      case level === 3:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/22c26898-57ae-5042-3f7f-9da1eb379c16.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/b7b72522-c607-a7ab-a3ba-66d5311ef188.png",
        };
        break;
      case level === 4:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/663f12a9-6775-0d93-85a7-c04108c54935.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/5deb2a6b-6ff9-3c2f-010c-fb831d470c4b.png",
        };
        break;
      case level === 5:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/8eb09866-8222-2e69-78e9-1b6baff90a20.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/9212b95a-c41d-63be-c618-a764b1e884ab.png",
        };
        break;
      default:
        levelImage = {
          desktop:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/49381b9c-8858-4756-679e-231384b5ebd5.png",
          mobile:
            "https://mcusercontent.com/91d753cf1db5228f650c8546a/images/bd242c9c-4ee3-8de6-b3bf-3d36df0df1d5.png",
        };
        break;
    }

    if (plan === "Free")
      NodeMailer({
        name,
        email,
        assessment_info,
        concept: "Execution",
        level: levelImage,
        plan,
      });

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
