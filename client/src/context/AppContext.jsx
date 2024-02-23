import { createContext } from "react";
import { useSelector } from "react-redux";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { mindset_assessment_evaluation } = useSelector((state) => state.app);

  //Select one scoring
  function selectOneScoring(answer) {
    let score = 1;
    switch (answer) {
      case "Almost always":
        score = 5;
        break;
      case "often":
      case "Totally like us":
        score = 4;
        break;
      case "Sometimes":
      case "Mostly like us":
        score = 3;
        break;
      case "Rarely":
      case "Somewhat like us":
        score = 2;
        break;
      case "Almost never":
      case "Not like us":
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
    "current score: " +
      mindset_assessment_evaluation?.Personal?.reduce((a, c) => a + c.score, 0)
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
