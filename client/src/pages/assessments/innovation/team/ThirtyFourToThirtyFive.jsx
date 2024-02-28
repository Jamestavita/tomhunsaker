import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AppButton900,
  AppNextButton,
} from "../../../../components/reuseable/AppButtons";
import appContext from "../../../../context/AppContext";
import { setInnovationAssessmentEvaluation } from "../../../../store/features/appSlice";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function ThirtyFourToThirtyFive() {
  const { number_team_rank } = useParams();
  const navigate = useNavigate();
  const { innovation_assessment_questions, innovation_assessment_evaluation } =
    useSelector((state) => state.app);
  const { getResponse, selectOneScoring } = useContext(appContext);
  const [assessment, setAssessment] = useState({});
  const dispatch = useDispatch();

  //Get assessment
  useEffect(() => {
    setAssessment(
      innovation_assessment_questions.find(
        (question) => question.number === number_team_rank
      )
    );
  }, [number_team_rank]);

  //Handle select one choice
  function handleChange(e) {
    // dispatch(
    //   setInnovationAssessmentEvaluation({
    //     category: assessment.category,
    //     answer: {
    //       number: assessment.number,
    //       qstn: assessment.qstn,
    //       response: e.target.value,
    //       significance: assessment.significance,
    //       score: selectOneScoring(e.target.value),
    //     },
    //   })
    // );
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M211.552 3.57869C184.37 31.0096 146.67 48 105.001 48C64.1974 48 27.199 31.7076 0.15625 5.27338C38.1049 1.79297 76.7677 0 116.001 0C148.264 0 180.141 1.21246 211.552 3.57869Z"
              fill="#315C90"
            />
          </svg>
        </div>
        <div className="grid gap-12 w-[min(703px,100%)] mx-auto my-5 z-[1]">
          <p className="text-[30px] md:text-[44px] font-bold text-center">
            {assessment.qstn}
          </p>
          <DragDropContext>
            <Droppable droppableId="assessment_qstns">
              {(provided) => (
                <div
                  className="assessment_qstns grid gap-4"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {assessment?.options?.map((option, index) => (
                    <Draggable
                      key={option + number_team_rank}
                      draggableId={option + number_team_rank}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="px-6 flex items-center gap-4 bg-Greyscale rounded-[20px] relative overflow-hidden"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <p
                            htmlFor={option}
                            className="py-4 text-[18px] w-[calc(100%-2.5rem)] z-20"
                          >
                            {option}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <g opacity="0.5" clipPath="url(#clip0_877_257)">
                              <path
                                d="M14.6673 23.9997C14.6673 25.4663 13.4673 26.6663 12.0007 26.6663C10.534 26.6663 9.33398 25.4663 9.33398 23.9997C9.33398 22.533 10.534 21.333 12.0007 21.333C13.4673 21.333 14.6673 22.533 14.6673 23.9997ZM12.0007 13.333C10.534 13.333 9.33398 14.533 9.33398 15.9997C9.33398 17.4663 10.534 18.6663 12.0007 18.6663C13.4673 18.6663 14.6673 17.4663 14.6673 15.9997C14.6673 14.533 13.4673 13.333 12.0007 13.333ZM12.0007 5.33301C10.534 5.33301 9.33398 6.53301 9.33398 7.99967C9.33398 9.46634 10.534 10.6663 12.0007 10.6663C13.4673 10.6663 14.6673 9.46634 14.6673 7.99967C14.6673 6.53301 13.4673 5.33301 12.0007 5.33301ZM20.0007 10.6663C21.4673 10.6663 22.6673 9.46634 22.6673 7.99967C22.6673 6.53301 21.4673 5.33301 20.0007 5.33301C18.534 5.33301 17.334 6.53301 17.334 7.99967C17.334 9.46634 18.534 10.6663 20.0007 10.6663ZM20.0007 13.333C18.534 13.333 17.334 14.533 17.334 15.9997C17.334 17.4663 18.534 18.6663 20.0007 18.6663C21.4673 18.6663 22.6673 17.4663 22.6673 15.9997C22.6673 14.533 21.4673 13.333 20.0007 13.333ZM20.0007 21.333C18.534 21.333 17.334 22.533 17.334 23.9997C17.334 25.4663 18.534 26.6663 20.0007 26.6663C21.4673 26.6663 22.6673 25.4663 22.6673 23.9997C22.6673 22.533 21.4673 21.333 20.0007 21.333Z"
                                fill="#051C09"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_877_257">
                                <rect width="32" height="32" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <AppNextButton
            onClick={() =>
              navigate(
                number_team_rank < "10"
                  ? `../assessment/innovation/personal/${(
                      "0" +
                      (+number_team_rank + 1)
                    ).slice(-2)}`
                  : `../assessment/innovation/interpersonal/${
                      +number_team_rank + 1
                    }`
              )
            }
            className="bg-Greyscale900 text-Greyscale rounded-[4px] border-2 border-Dark disabled:opacity-40 mx-auto"
            disabled={
              !getResponse(
                innovation_assessment_evaluation,
                assessment.category,
                number_team_rank
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
