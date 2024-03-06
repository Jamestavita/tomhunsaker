import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AppButton900,
  AppNextButton,
} from "../../../../components/reuseable/AppButtons";
import appContext from "../../../../context/AppContext";
import { setInnovationAssessmentEvaluation } from "../../../../store/features/appSlice";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Option from "./Option";

export default function ThirtyFourToThirtyFive() {
  const dispatch = useDispatch();
  const { number_team_rank } = useParams();
  const navigate = useNavigate();
  const { innovation_assessment_questions, innovation_assessment_evaluation } =
    useSelector((state) => state.app);
  const [assessment, setAssessment] = useState([]);
  const [assessmentOptions, setAssessmentOptions] = useState();

  //Get assessment
  useEffect(() => {
    let assessmentQstn = innovation_assessment_questions.find(
      (question) => question.number === number_team_rank
    );

    setAssessment(assessmentQstn);

    function getResponse() {
      const value = innovation_assessment_evaluation.Team?.find(
        (evaluation) => evaluation.number === number_team_rank
      );

      if (!value) {
        dispatch(
          setInnovationAssessmentEvaluation({
            category: assessmentQstn.category,
            answer: {
              number: assessmentQstn.number,
              qstn: assessmentQstn.qstn,
              response: assessmentQstn.options?.map((res) => ({
                id: res,
                title: res,
              })),
              significance: assessmentQstn.significance,
              score: 0,
            },
          })
        );
        setAssessmentOptions(
          assessmentQstn.options?.map((res) => ({
            id: res,
            title: res,
          }))
        );
      } else {
        setAssessmentOptions(
          innovation_assessment_evaluation.Team?.find(
            (evaluation) => evaluation.number === number_team_rank
          ).response
        );
      }
    }
    getResponse();
  }, [number_team_rank]);

  //Handle drag
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    const getOptionPosition = (id) =>
      assessmentOptions.findIndex((option) => option.id === id);

    setAssessmentOptions((options) => {
      const originalPos = getOptionPosition(active.id);
      const newPos = getOptionPosition(over.id);

      dispatch(
        setInnovationAssessmentEvaluation({
          category: assessment.category,
          answer: {
            number: assessment.number,
            qstn: assessment.qstn,
            response: arrayMove(options, originalPos, newPos),
            significance: assessment.significance,
            score: 0,
          },
        })
      );
      return arrayMove(options, originalPos, newPos);
    });
  }

  return (
    <div className="">
      <div className="grid lg:flex gap-2 items-center w-[min(90rem,100%)] mx-auto p-4 md:px-12 lg:px-32 lg:justify-between">
        <p className="text-[24px] text-center lg:text-left font-bold w-[min(340px,100%)] md:w-full lg:w-[min(340px,100%)] mx-auto lg:mx-0">
          The following question relates to{" "}
          <span className="text-Blue500">your team</span>
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
            {number_team_rank}
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
              fill="#315C90"
            />
          </svg>
        </div>
        <div className="grid gap-12 w-[min(703px,100%)] mx-auto my-5 z-[1]">
          <p className="text-[30px] md:text-[44px] font-bold text-center">
            {assessment.qstn}
          </p>
          {assessmentOptions && (
            <DndContext
              collisionDetection={closestCorners}
              onDragEnd={handleDragEnd}
            >
              <ul className="grid gap-4">
                <SortableContext
                  items={assessmentOptions}
                  strategy={verticalListSortingStrategy}
                >
                  {assessmentOptions.map((option) => (
                    <Option
                      key={option.id}
                      id={option.id}
                      title={option.title}
                    />
                  ))}
                </SortableContext>
              </ul>
            </DndContext>
          )}

          <AppNextButton
            onClick={() =>
              navigate(
                number_team_rank < 35
                  ? `../assessment/innovation/team_rank/${(
                      "0" +
                      (+number_team_rank + 1)
                    ).slice(-2)}`
                  : `../assessment/innovation/ivas/${+number_team_rank + 1}`
              )
            }
            className="bg-Greyscale900 text-Greyscale rounded-[4px] border-2 border-Dark disabled:opacity-40 mx-auto"
            label={`Next`}
          />
        </div>
      </div>
    </div>
  );
}
