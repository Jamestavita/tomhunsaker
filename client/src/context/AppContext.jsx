import { createContext } from "react";
import { useSelector } from "react-redux";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const {
    mindset_assessment_evaluation,
    strategy_assessment_evaluation,
    innovation_assessment_evaluation,
    execution_assessment_evaluation,
  } = useSelector((state) => state.app);

  //Select one scoring
  function selectOneScoring(answer, opposite) {
    let score = 0;

    if (opposite === true) {
      switch (answer) {
        case "Often":
        case "Mostly describes us":
          score = 1;
          break;
        case "Sometimes":
        case "Somewhat describes us":
          score = 2;
          break;
        case "Rarely":
        case "Not much like us":
          score = 3;
          break;
        case "Almost never":
        case "Not at all like us":
          score = 4;
          break;
        case "Don't know":
          score = 5;
          break;
        default:
          score = 0;
          break;
      }
    } else
      switch (answer) {
        case "Almost always":
        case "Totally describes us":
          score = 5;
          break;
        case "Often":
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

  //Total points Functions---------------
  //Get category points
  function category_points(assessment, category) {
    const points = assessment?.[category]?.reduce((a, c) => a + c.score, 0);
    return points;
  }
  //Get section points
  function section_points(assessment, section) {
    const points =
      (assessment?.[section]?.Continue?.score > 5
        ? 5
        : assessment?.[section]?.Continue?.score) +
        (assessment?.[section]?.Stop?.score > 5
          ? 5
          : assessment?.[section]?.Stop?.score) +
        assessment?.[section]?.Start?.score >
      5
        ? 5
        : assessment?.[section]?.Start?.score;
    return points;
  }

  const total_score_mind =
    category_points(mindset_assessment_evaluation, "Personal") +
    category_points(mindset_assessment_evaluation, "Interpersonal") +
    category_points(mindset_assessment_evaluation, "Team") +
    section_points(mindset_assessment_evaluation, "Purpose") +
    section_points(mindset_assessment_evaluation, "People") +
    section_points(mindset_assessment_evaluation, "Positions") +
    section_points(mindset_assessment_evaluation, "Process");
  const total_score_strategy =
    category_points(strategy_assessment_evaluation, "Personal") +
    category_points(strategy_assessment_evaluation, "Team") +
    category_points(strategy_assessment_evaluation, "Organization") +
    section_points(strategy_assessment_evaluation, "Fit_to_Purpose") +
    section_points(strategy_assessment_evaluation, "Relative_Advantage");
  const total_score_innovation =
    category_points(innovation_assessment_evaluation, "Personal") +
    category_points(innovation_assessment_evaluation, "Interpersonal") +
    category_points(innovation_assessment_evaluation, "Team") +
    section_points(innovation_assessment_evaluation, "Ideation") +
    section_points(innovation_assessment_evaluation, "Validation") +
    section_points(innovation_assessment_evaluation, "Adoption") +
    section_points(innovation_assessment_evaluation, "System");
  const total_score_execution =
    category_points(execution_assessment_evaluation, "Personal") +
    category_points(execution_assessment_evaluation, "Team") +
    section_points(execution_assessment_evaluation, "Precision_and_Execution") +
    section_points(execution_assessment_evaluation, "Operational_Agility");

  console.log({
    Mindset: {
      Mindset_Assessment: mindset_assessment_evaluation,
      points: {
        //Personal
        Personal_points: category_points(
          mindset_assessment_evaluation,
          "Personal"
        ),
        Personal_score: +(
          category_points(mindset_assessment_evaluation, "Personal") / 50
        ).toFixed(2),

        //Interpersonal
        Interpersonal_points: category_points(
          mindset_assessment_evaluation,
          "Interpersonal"
        ),
        Interpersonal_score: +(
          category_points(mindset_assessment_evaluation, "Interpersonal") / 50
        ).toFixed(2),

        //Team
        Team_points:
          category_points(mindset_assessment_evaluation, "Team") +
          section_points(mindset_assessment_evaluation, "Purpose") +
          section_points(mindset_assessment_evaluation, "People") +
          section_points(mindset_assessment_evaluation, "Positions") +
          section_points(mindset_assessment_evaluation, "Process"),
        Team_score: +(
          (category_points(mindset_assessment_evaluation, "Team") +
            section_points(mindset_assessment_evaluation, "Purpose") +
            section_points(mindset_assessment_evaluation, "People") +
            section_points(mindset_assessment_evaluation, "Positions") +
            section_points(mindset_assessment_evaluation, "Process")) /
          95
        ).toFixed(2),
      },
      total_score_mind,
      level:
        total_score_mind > 170 && total_score_mind < 196
          ? 5
          : total_score_mind > 139 && total_score_mind < 171
          ? 4
          : total_score_mind > 89 && total_score_mind < 140
          ? 3
          : total_score_mind > 39 && total_score_mind < 90
          ? 2
          : 1,
    },
    Strategy: {
      Strategy_Assessment: strategy_assessment_evaluation,
      points: {
        //Personal
        Personal_points: category_points(
          strategy_assessment_evaluation,
          "Personal"
        ),
        Personal_score: +(
          category_points(strategy_assessment_evaluation, "Personal") / 45
        ).toFixed(2),

        //Team
        Team_points: category_points(strategy_assessment_evaluation, "Team"),
        Team_score: +(
          category_points(strategy_assessment_evaluation, "Team") / 40
        ).toFixed(2),

        //Organization
        Organization_points:
          category_points(strategy_assessment_evaluation, "Organization") +
          section_points(strategy_assessment_evaluation, "Fit_to_Purpose") +
          section_points(strategy_assessment_evaluation, "Relative_Advantage"),
        Organization_score: +(
          (category_points(strategy_assessment_evaluation, "Organization") +
            section_points(strategy_assessment_evaluation, "Fit_to_Purpose") +
            section_points(
              strategy_assessment_evaluation,
              "Relative_Advantage"
            )) /
          110
        ).toFixed(2),
      },
      total_score_strategy,
      level:
        total_score_strategy > 170 && total_score_strategy < 196
          ? 5
          : total_score_strategy > 139 && total_score_strategy < 171
          ? 4
          : total_score_strategy > 89 && total_score_strategy < 140
          ? 3
          : total_score_strategy > 39 && total_score_strategy < 90
          ? 2
          : 1,
    },
    Innovation: {
      Innovation_Assessment: innovation_assessment_evaluation,
      points: {
        //Personal
        Personal_points: category_points(
          innovation_assessment_evaluation,
          "Personal"
        ),
        Personal_score: +(
          category_points(innovation_assessment_evaluation, "Personal") / 70
        ).toFixed(2),

        //Interpersonal
        Interpersonal_points: category_points(
          innovation_assessment_evaluation,
          "Interpersonal"
        ),
        Interpersonal_score: +(
          category_points(innovation_assessment_evaluation, "Interpersonal") /
          50
        ).toFixed(2),

        //Team
        Team_points:
          category_points(innovation_assessment_evaluation, "Team") +
          section_points(innovation_assessment_evaluation, "Ideation") +
          section_points(innovation_assessment_evaluation, "Validation") +
          section_points(innovation_assessment_evaluation, "Adoption") +
          section_points(innovation_assessment_evaluation, "System"),
        Team_score: +(
          (category_points(innovation_assessment_evaluation, "Team") +
            section_points(innovation_assessment_evaluation, "Ideation") +
            section_points(innovation_assessment_evaluation, "Validation") +
            section_points(innovation_assessment_evaluation, "Adoption") +
            section_points(innovation_assessment_evaluation, "System")) /
          65
        ).toFixed(2),
      },
      total_score_innovation,
      level:
        total_score_innovation > 159 && total_score_innovation < 186
          ? 5
          : total_score_innovation > 120 && total_score_innovation < 160
          ? 4
          : total_score_innovation > 69 && total_score_innovation < 121
          ? 3
          : total_score_innovation > 39 && total_score_innovation < 70
          ? 2
          : 1,
    },
    Execution: {
      Execution_Assessment: execution_assessment_evaluation,
      points: {
        //Personal
        Personal_points: category_points(
          execution_assessment_evaluation,
          "Personal"
        ),
        Personal_score: +(
          category_points(execution_assessment_evaluation, "Personal") / 75
        ).toFixed(2),

        //Team
        Team_points:
          category_points(execution_assessment_evaluation, "Team") +
          section_points(
            execution_assessment_evaluation,
            "Precision_and_Execution"
          ) +
          section_points(
            execution_assessment_evaluation,
            "Operational_Agility"
          ),
        Team_score: +(
          (category_points(execution_assessment_evaluation, "Team") +
            section_points(
              execution_assessment_evaluation,
              "Precision_and_Execution"
            ) +
            section_points(
              execution_assessment_evaluation,
              "Operational_Agility"
            )) /
          120
        ).toFixed(2),
      },
      total_score_execution,
      level:
        total_score_execution > 170 && total_score_execution < 196
          ? 5
          : total_score_execution > 139 && total_score_execution < 171
          ? 4
          : total_score_execution > 89 && total_score_execution < 140
          ? 3
          : total_score_execution > 39 && total_score_execution < 90
          ? 2
          : 1,
    },
  });

  return (
    <appContext.Provider
      value={{
        getResponse,
        getSelectedChoices,
        getOther,
        selectOneScoring,
        category_points,
        section_points,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default appContext;
