import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppNextButton } from "../../../../components/reuseable/AppButtons";
import appContext from "../../../../context/AppContext";
import { setStrategyAssessmentEvaluation } from "../../../../store/features/appSlice";

export default function TenToSeventeen() {
  const { number_team } = useParams();
  const navigate = useNavigate();
  const { strategy_assessment_questions, strategy_assessment_evaluation } =
    useSelector((state) => state.app);
  const { getResponse, selectOneScoring } = useContext(appContext);
  const [assessment, setAssessment] = useState({});
  const dispatch = useDispatch();

  //Get assessment
  useEffect(() => {
    setAssessment(
      strategy_assessment_questions.find(
        (question) => question.number === number_team
      )
    );
  }, [number_team]);

  //Handle select one choice
  function handleChange(e) {
    dispatch(
      setStrategyAssessmentEvaluation({
        category: assessment.category,
        answer: {
          number: assessment.number,
          qstn: assessment.qstn,
          response: e.target.value,
          significance: assessment.significance,
          score:
            assessment.number === "10"
              ? selectOneScoring(e.target.value, true)
              : selectOneScoring(e.target.value),
        },
      })
    );
  }

  return (
    <div className="">
      <div className="grid lg:flex gap-2 items-center w-[min(90rem,100%)] mx-auto p-4 md:px-12 lg:px-32 lg:justify-between">
        <p className="text-[24px] text-center lg:text-left font-bold w-[min(340px,100%)] md:w-full lg:w-[min(340px,100%)] mx-auto lg:mx-0">
          The following question relates to{" "}
          <span className="text-Green500">your direct team</span>
        </p>
        <p className="text-[16px] font-medium text-center lg:text-right w-[min(340px,100%)] md:w-full lg:w-[min(340px,100%)] mx-auto lg:mx-0">
          Answer as honestly as possible to get the most value from your
          response
        </p>
      </div>
      <div className="overflow-hidden relative grid px-4 md:px-12 lg:px-32">
        <div className="w-[1850px] h-[1358px] bg-Greyscale200 rounded-[50%] absolute top-0 -translate-x-[50%] left-1/2"></div>
        <div className="relative grid justify-items-center">
          <p className="absolute top-0 text-Greyscale text-[24px] font-bold self-center">
            {number_team}
          </p>
          <svg
            width="212"
            height="48"
            viewBox="0 0 212 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M211.552 3.57869C184.37 31.0096 146.67 48 105.001 48C64.1974 48 27.199 31.7076 0.15625 5.27338C38.1049 1.79297 76.7677 0 116.001 0C148.264 0 180.141 1.21246 211.552 3.57869Z"
              fill="#425740"
            />
          </svg>
        </div>
        <div className="grid gap-12 w-[min(703px,100%)] mx-auto my-5 z-[1]">
          <p className="text-[30px] md:text-[44px] font-bold text-center">
            {assessment.qstn}
          </p>
          <div className="grid gap-4">
            {assessment?.options?.map((option) => (
              <div
                key={option + number_team}
                className="px-6 flex items-center gap-4 bg-Greyscale rounded-[20px] relative overflow-hidden cursor-pointer"
              >
                <input
                  type="radio"
                  className="peer/radio absolute w-full h-full opacity-0 z-30 cursor-pointer"
                  id={option}
                  name={assessment?.qstn}
                  checked={
                    getResponse(
                      strategy_assessment_evaluation,
                      assessment.category,
                      number_team
                    )?.response === option
                  }
                  value={option}
                  onChange={(e) => handleChange(e, assessment)}
                />
                <div className="p-1 rounded-full border-2  bg-Greyscale z-20 peer-checked/radio:[&>*]:bg-Greyscale800 grid place-items-center transition">
                  <div className="w-3 h-3 rounded-full"></div>
                </div>
                <label
                  htmlFor={option}
                  className="py-4 text-[18px] w-[calc(100%-2.5rem)] z-20 cursor-pointer"
                >
                  {option}
                </label>
                <div
                  className={`absolute h-full w-full peer-checked/radio:bg-transparent z-10 top-0 left-0 cursor-pointer`}
                ></div>
              </div>
            ))}
          </div>
          <AppNextButton
            onClick={() =>
              navigate(
                number_team < 17
                  ? `../assessment/strategy/team/${(
                      "0" +
                      (+number_team + 1)
                    ).slice(-2)}`
                  : `../assessment/strategy/organization/${+number_team + 1}`
              )
            }
            className="bg-Greyscale900 text-Greyscale rounded-[4px] border-2 border-Dark disabled:opacity-40 mx-auto"
            disabled={
              !getResponse(
                strategy_assessment_evaluation,
                assessment.category,
                number_team
              )?.response
            }
            label={`Next`}
          />
        </div>
      </div>
    </div>
  );
}
