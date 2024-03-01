import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppNextButton } from "../../../../components/reuseable/AppButtons";
import appContext from "../../../../context/AppContext";
import {
  setStrategyAssessmentPR,
  setStrategyOther,
} from "../../../../store/features/appSlice";
import { FaCheck } from "react-icons/fa";

export default function PR() {
  const { number_pr } = useParams();
  const navigate = useNavigate();
  const { strategy_assessment_questions, strategy_assessment_evaluation } =
    useSelector((state) => state.app);
  const { getSelectedChoices, getOther } = useContext(appContext);
  const [assessment, setAssessment] = useState({});
  const dispatch = useDispatch();

  //Get assessment
  useEffect(() => {
    setAssessment(
      strategy_assessment_questions.find(
        (question) => question.number === number_pr
      )
    );
  }, [number_pr]);

  // Handle select many choice
  function handleChange(e, section) {
    dispatch(
      setStrategyAssessmentPR({
        category: assessment.category,
        section,
        choice: e.target.value,
      })
    );
  }

  // Handle others
  function handleOther(value, section) {
    dispatch(
      setStrategyOther({
        category: assessment.category,
        section,
        other: value,
      })
    );
  }

  return (
    <div className="">
      <div className="grid lg:flex gap-2 items-center w-[min(90rem,100%)] mx-auto p-4 md:px-12 lg:px-32 lg:justify-between">
        <p className="text-center lg:text-left font-medium w-[min(340px,100%)] md:w-full lg:w-[min(550px,100%)] mx-auto lg:mx-0">
          <span className="text-Green500 mb-1">
            {assessment?.category?.replace(/_/g, " ")}
          </span>
          <br />
          {assessment?.significance}
        </p>
        <p className="text-[16px] font-medium text-center lg:text-right w-[min(340px,100%)] md:w-full lg:w-[min(340px,100%)] mx-auto lg:mx-0">
          A number of statements will be presented to you in three categories:
          Continue, Stop, and Start. Select all of the statements that apply in
          each category.
        </p>
      </div>
      <div className="overflow-hidden relative grid px-4 md:px-12 lg:px-32">
        <div className="w-[1850px] h-[1358px] bg-Greyscale200 rounded-[50%] absolute top-0 -translate-x-[50%] left-1/2"></div>
        <div className="w-[1850px] h-[1358px] bg-Greyscale200 rounded-[50%] absolute top-[1000px] -translate-x-[50%] left-1/2"></div>
        <div className="w-[1850px] h-[1358px] bg-Greyscale200 rounded-[50%] absolute top-[2000px] -translate-x-[50%] left-1/2"></div>
        <div className="w-[1850px] h-[1358px] bg-Greyscale200 rounded-[50%] absolute top-[3000px] -translate-x-[50%] left-1/2"></div>
        <div className="relative grid justify-items-center">
          <p className="absolute top-0 text-Greyscale text-[24px] font-bold self-center">
            {number_pr}
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
        <div className="grid gap-12">
          {assessment?.qstns?.map((section) => (
            <div
              className="grid gap-12 w-[min(703px,100%)] mx-auto my-5 z-[1]"
              key={section.qstn}
            >
              <p className="text-[30px] md:text-[44px] font-bold text-center">
                {section.qstn}
              </p>
              <p className="text-center -mt-6">Select all that apply</p>
              <div className="grid gap-4 -mt-8">
                {section.options.map((option) => (
                  <div
                    key={option + section.qstn}
                    className="px-6 flex items-center gap-4 bg-Greyscale rounded-[20px] relative overflow-hidden cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="peer/radio absolute w-full h-full opacity-0 z-30 cursor-pointer"
                      id={option}
                      name={section.qstn}
                      checked={getSelectedChoices(
                        strategy_assessment_evaluation,
                        assessment.category,
                        section.qstn
                      )?.includes(option)}
                      value={option}
                      onChange={(e) => handleChange(e, section.qstn)}
                    />
                    <div className="p-1 rounded-md border-[1px] bg-Greyscale z-20 peer-checked/radio:bg-Greyscale800 grid place-items-center transition">
                      <FaCheck className="text-Greyscale" />
                    </div>
                    <label
                      htmlFor={section.qstn}
                      className="py-4 text-[18px] w-[calc(100%-2.5rem)] z-20 cursor-pointer"
                    >
                      {option}
                    </label>
                    <div
                      className={`absolute h-full w-full peer-checked/radio:bg-transparent z-10 top-0 left-0 cursor-pointer`}
                    ></div>
                  </div>
                ))}
                <div
                  className="px-6 py-2 flex items-center gap-4 bg-Greyscale rounded-[20px] relative overflow-hidden"
                  key={number_pr}
                >
                  <input
                    type="checkbox"
                    className="hidden peer/radio "
                    // id={section.qstn}
                    // name={section.qstn}
                    readOnly
                    checked={getOther(
                      strategy_assessment_evaluation,
                      assessment.category,
                      section.qstn
                    )}
                  />
                  <div className="p-1 rounded-md border-[1px]  bg-Greyscale z-20 peer-checked/radio:bg-Greyscale800 grid place-items-center transition">
                    <FaCheck className="text-Greyscale" />
                  </div>
                  <input
                    className="py-2 px-4 text-[18px] rounded-[8px] bg-white w-full z-20 focus:placeholder-transparent border-[1px]"
                    placeholder="Other (please describe)"
                    onChange={(e) => handleOther(e.target.value, section.qstn)}
                    value={getOther(
                      strategy_assessment_evaluation,
                      assessment.category,
                      section.qstn
                    )}
                  />
                  <div
                    className={`absolute h-full w-full peer-checked/radio:bg-transparent z-10 top-0 left-0 cursor-pointer`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AppNextButton
          onClick={() =>
            navigate(
              number_pr < 39
                ? `../assessment/strategy/pr/${+number_pr + 1}`
                : "../assessment/strategy/plan"
            )
          }
          className="bg-Greyscale900 text-Greyscale rounded-[4px] border-2 border-Dark disabled:opacity-40 mx-auto my-10 z-[1]"
          disabled={
            !(
              getSelectedChoices(
                strategy_assessment_evaluation,
                assessment?.category,
                "Continue"
              )?.length ||
              getOther(
                strategy_assessment_evaluation,
                assessment.category,
                "Continue"
              )?.length
            ) ||
            !(
              getSelectedChoices(
                strategy_assessment_evaluation,
                assessment?.category,
                "Stop"
              )?.length ||
              getOther(
                strategy_assessment_evaluation,
                assessment.category,
                "Stop"
              )?.length
            ) ||
            !(
              getSelectedChoices(
                strategy_assessment_evaluation,
                assessment?.category,
                "Start"
              )?.length ||
              getOther(
                strategy_assessment_evaluation,
                assessment.category,
                "Start"
              )?.length
            )
          }
          label={`Next`}
        />
      </div>
    </div>
  );
}
