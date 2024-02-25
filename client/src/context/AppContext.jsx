import { createContext } from "react";
import { useSelector } from "react-redux";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { mindset_assessment_evaluation } = useSelector((state) => state.app);

  //Select one scoring
  function selectOneScoring(answer) {
    let score = 0;
    switch (answer) {
      case "Almost always":
      case "Totally describes us":
        score = 5;
        break;
      case "often":
      case "Mostly describes us":
        score = 4;
        break;
      case "Sometimes":
      case "Somewhat describes us":
        score = 3;
        break;
      case "Rarely":
      case "Not much like us":
        score = 2;
        break;
      case "Almost never":
      case "Not at all like us":
        score = 1;
        break;
      default:
        score = 0;
        break;
    }
    return score;
  }

  //Get response
  function getResponse(evaluations, category, qstn_number) {
    const response = evaluations[category]?.find(
      (evaluation) => evaluation.number === qstn_number
    );
    return response;
  }

  //Get selected choices
  function getSelectedChoices(evaluations, category, section) {
    const response = evaluations[category]?.[section]?.choices;
    return response;
  }

  //Get other
  function getOther(evaluations, category, section) {
    const response = evaluations[category]?.[section]?.other;
    return response;
  }

  //Current score
  console.log(mindset_assessment_evaluation);
  console.log(
    "Personal points: " +
      mindset_assessment_evaluation?.Personal?.reduce((a, c) => a + c.score, 0)
  );
  console.log(
    "Personal score: " +
      (
        mindset_assessment_evaluation?.Personal?.reduce(
          (a, c) => a + c.score,
          0
        ) / 50
      ).toFixed(2)
  );
  console.log(
    "Interpersonal points: " +
      mindset_assessment_evaluation?.Interpersonal?.reduce(
        (a, c) => a + c.score,
        0
      )
  );
  console.log(
    "Interpersonal score: " +
      (
        mindset_assessment_evaluation?.Interpersonal?.reduce(
          (a, c) => a + c.score,
          0
        ) / 50
      ).toFixed(2)
  );
  console.log(
    "Team points: " +
      mindset_assessment_evaluation?.Team?.reduce((a, c) => a + c.score, 0)
  );
  console.log(
    "Team score: " +
      (
        mindset_assessment_evaluation?.Team?.reduce((a, c) => a + c.score, 0) /
        95
      ).toFixed(2)
  );
  console.log(
    "Purpose score: " +
      (mindset_assessment_evaluation?.Purpose?.Continue?.score +
        mindset_assessment_evaluation?.Purpose?.Stop?.score +
        mindset_assessment_evaluation?.Purpose?.Start?.score)
  );
  console.log(
    "People score: " +
      (mindset_assessment_evaluation?.People?.Continue?.score +
        mindset_assessment_evaluation?.People?.Stop?.score +
        mindset_assessment_evaluation?.People?.Start?.score)
  );
  console.log(
    "Positions score: " +
      (mindset_assessment_evaluation?.Positions?.Continue?.score +
        mindset_assessment_evaluation?.Positions?.Stop?.score +
        mindset_assessment_evaluation?.Positions?.Start?.score)
  );
  console.log(
    "Process score: " +
      (mindset_assessment_evaluation?.Process?.Continue?.score +
        mindset_assessment_evaluation?.Process?.Stop?.score +
        mindset_assessment_evaluation?.Process?.Start?.score)
  );

  return (
    <appContext.Provider
      value={{ getResponse, getSelectedChoices, getOther, selectOneScoring }}
    >
      {children}
    </appContext.Provider>
  );
};

export default appContext;
