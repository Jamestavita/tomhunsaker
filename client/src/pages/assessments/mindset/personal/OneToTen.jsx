import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AppButton900,
  AppNextButton,
} from "../../../../components/reuseable/AppButtons";
import appContext from "../../../../context/AppContext";
import { setMindsetAssessmentEvaluation } from "../../../../store/features/appSlice";

export default function OneToTen() {
  const { number_personal } = useParams();
  const navigate = useNavigate();
  const { mindset_assessment_questions, mindset_assessment_evaluation } =
    useSelector((state) => state.app);
  const { getResponse, selectOneScoring } = useContext(appContext);
  const [assessment, setAssessment] = useState({});
  const dispatch = useDispatch();

  //Get assessment
  useEffect(() => {
    setAssessment(
      mindset_assessment_questions.find(
        (question) => question.number === number_personal
      )
    );
  }, [number_personal]);

  //Handle select one choice
  function handleChange(e) {
    dispatch(
      setMindsetAssessmentEvaluation({
        category: assessment.category,
        answer: {
          number: assessment.number,
          qstn: assessment.qstn,
          response: e.target.value,
          significance: assessment.significance,
          score: selectOneScoring(e.target.value),
        },
      })
    );
  }

  // console.log(
  //   getResponse(
  //     mindset_assessment_evaluation,
  //     assessment.category,
  //     number_personal
  //   )
  // );
  // console.log(mindset_assessment_evaluation);

  return (
    <div className="">
      <div className="grid lg:flex gap-2 items-center w-[min(90rem,100%)] mx-auto p-4 md:px-12 lg:px-32 lg:justify-between">
        <p className="text-[24px] text-center lg:text-left font-bold w-[min(340px,100%)] md:w-full lg:w-[min(340px,100%)] mx-auto lg:mx-0">
          The following question relates to you{" "}
          <span className="text-Red500">personally</span>
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
            {number_personal}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="48"
            viewBox="0 0 212 48"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M211.552 3.57869C184.37 31.0096 146.67 48 105.001 48C64.1974 48 27.199 31.7076 0.15625 5.27338C38.1049 1.79297 76.7677 0 116.001 0C148.264 0 180.141 1.21246 211.552 3.57869Z"
              fill="#CB4A22"
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
                key={option + number_personal}
                className="px-6 flex items-center gap-4 bg-Greyscale rounded-[20px] relative overflow-hidden cursor-pointer"
              >
                <input
                  type="radio"
                  className="peer/radio absolute w-full h-full opacity-0 z-30 cursor-pointer"
                  id={option}
                  name={assessment?.qstn}
                  checked={
                    getResponse(
                      mindset_assessment_evaluation,
                      assessment.category,
                      number_personal
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
          {/* <div className="flex gap-4"> */}
          <AppNextButton
            onClick={() =>
              navigate(
                number_personal < "10"
                  ? `../assessment/mindset/personal/${(
                      "0" +
                      (+number_personal + 1)
                    ).slice(-2)}`
                  : `../assessment/mindset/interpersonal/${
                      +number_personal + 1
                    }`
              )
            }
            className="bg-Greyscale900 text-Greyscale rounded-[4px] border-2 border-Dark disabled:opacity-40 mx-auto"
            disabled={
              !getResponse(
                mindset_assessment_evaluation,
                assessment.category,
                number_personal
              )?.response
            }
            label={`Next`}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
