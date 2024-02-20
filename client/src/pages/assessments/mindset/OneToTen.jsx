import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppButton900 } from "../../../components/reuseable/AppButtons";

export default function OneToTen() {
  const { assessment_number } = useParams();
  const navigate = useNavigate();
  const { mindset_assessment_questions } = useSelector((state) => state.app);
  const [assessment, setAssessment] = useState({});

  useEffect(() => {
    setAssessment(
      mindset_assessment_questions.find(
        (question) => question.number === assessment_number
      )
    );
  }, [assessment_number]);
  console.log(assessment);

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
      <div className="overflow-hidden relative grid">
        <div className="w-[1850px] h-[1358px] bg-Greyscale200 rounded-[50%] absolute top-0 -translate-x-[50%] left-1/2"></div>
        <div className="relative grid justify-items-center">
          <p className="absolute top-0 text-Greyscale text-[24px] font-bold self-center">
            {assessment_number}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="48"
            viewBox="0 0 212 48"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M211.552 3.57869C184.37 31.0096 146.67 48 105.001 48C64.1974 48 27.199 31.7076 0.15625 5.27338C38.1049 1.79297 76.7677 0 116.001 0C148.264 0 180.141 1.21246 211.552 3.57869Z"
              fill="#CB4A22"
            />
          </svg>
        </div>
        <div className="grid gap-12 w-[min(703px,100%)] mx-auto my-5 z-[1]">
          <p className="text-[44px] font-bold text-center">{assessment.qstn}</p>
          <div className="grid gap-4">
            {assessment?.options?.map((option) => (
              <div
                key={option}
                className="px-6 flex items-center gap-4 bg-[#F8F8F8] rounded-[20px] relative overflow-hidden cursor-pointer"
              >
                <input
                  type="radio"
                  className="peer/radio absolute w-full h-full opacity-0 z-30 cursor-pointer"
                  id={option}
                  name={assessment?.qstn}
                  // checked={getValue()?.answer === option}
                  value={option}
                  // onChange={(e) => handleChange(e, assessment)}
                />
                <div className="w-6 h-6 rounded-full border-4 bg-white peer-checked/radio:bg-Dark z-20"></div>
                <label
                  htmlFor={option}
                  className="py-4 text-Dark w-[calc(100%-2.5rem)] z-20 cursor-pointer"
                >
                  {option}
                </label>
                <div
                  className={`absolute h-full w-full peer-checked/radio:bg-[#E5DFFA] z-10 top-0 left-0 cursor-pointer`}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex mx-auto gap-4">
            <AppButton900
              onClick={() =>
                navigate(`../assessment/mindset/0${+assessment_number + 1}`)
              }
              className="bg-Greyscale900 text-Greyscale rounded-[4px] border-2 border-Dark disabled:opacity-40"
              // disabled={!getValue()?.answer}
              label={`Next`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
