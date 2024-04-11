import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetUserAssessmentInfoQuery } from "../../../services/appApi";

export default function UserAssessmentInfo() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, isError } = useGetUserAssessmentInfoQuery({
    concept: searchParams.get("concept"),
    name: searchParams.get("name"),
    id: searchParams.get("id"),
  });

  console.log(data);

  if (isError.data === "Could not find this user") navigate("/");

  if (searchParams.get("concept") === "Mindset")
    return (
      <>
        {data && (
          <section className="bg-Greyscale200">
            <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-24">
              <p className="text-[44px] font-bold text-center w-[min(35rem,100%)] mx-auto">
                Mindset & Culture Assessment Report
              </p>
              <div className=" text-center relative grid bg-white shadow-[6px_6px_12px_0px_rgba(27,27,27,0.20)] overflow-hidden rounded-[40px]">
                <div className="p-7 base:p-10 grid gap-5 rounded-t-[40px]">
                  <p className="text-[30px] font-bold">Congratulations</p>
                  <p className="text-[44px] font-bold">
                    {data.name} {data.last_name}
                  </p>
                  <p className="text-[30px] font-bold">
                    on completing the Mindset & Culture Assessment!
                  </p>
                  <p className="text-[18px]">
                    Scores range from Level 1 to Level 5 - Level 5 most closely
                    aligns with the factors known to deliver exceptional
                    performance.
                  </p>
                </div>
                <div className="justify-self-center w-[103%] aspect-[2/1] border-Red500 border border-b-transparent text-white p-5 pb-0 [border-radius:50%_50%_0_0/100%_100%_0_0] -mb-5">
                  <div className="justify-self-center w-full h-full bg-Red500 text-white px-5 pt-8 md:pt-[5rem] base:pt-[10rem] [border-radius:50%_50%_0_0/100%_100%_0_0]">
                    <p className="text-[clamp(10px,4vw,30px)]">
                      Your overall score is
                    </p>
                    <p className="text-[clamp(50px,16vw,220px)] font-700">
                      Level {data.level}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Personal Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for <span className="text-Red500">personal</span>{" "}
                    dimension compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Red500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Personal_score}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.7
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Personal.map(
                        (assessment, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-Greyscale200 border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{assessment.qstn}</td>
                            <td className="px-6 py-4">{assessment.response}</td>
                            <td className="px-6 py-4">
                              {assessment.significance}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Interpersonal Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for{" "}
                    <span className="text-Red500">interpersonal</span> dimension
                    compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Red500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Interpersonal_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.6
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Interpersonal.map(
                        (assessment, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-Greyscale200 border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{assessment.qstn}</td>
                            <td className="px-6 py-4">{assessment.response}</td>
                            <td className="px-6 py-4">
                              {assessment.significance}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Team Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for <span className="text-Red500">team</span>{" "}
                    dimension compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Red500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Team_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.4
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Team.map((assessment, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white even:bg-Greyscale200 border-b"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{assessment.qstn}</td>
                          <td className="px-6 py-4">{assessment.response}</td>
                          <td className="px-6 py-4">
                            {assessment.significance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 36</p>
                <p className="font-bold text-[44px] text-center">Purpose</p>
                <p className="font-bold text-[18px] text-center">
                  The reason why something is done. It is putting values to
                  action.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Purpose.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Purpose.Stop.choices.map((choice) => (
                      <p className="text-[18px] bg-white p-3 rounded-md">
                        {choice}
                      </p>
                    ))}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Purpose.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 37</p>
                <p className="font-bold text-[44px] text-center">People</p>
                <p className="font-bold text-[18px] text-center">
                  How well those in a group are able to maximize their
                  potential.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.People.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.People.Stop.choices.map((choice) => (
                      <p className="text-[18px] bg-white p-3 rounded-md">
                        {choice}
                      </p>
                    ))}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.People.Start.choices.map((choice) => (
                      <p className="text-[18px] bg-white p-3 rounded-md">
                        {choice}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 38</p>
                <p className="font-bold text-[44px] text-center">Positions</p>
                <p className="font-bold text-[18px] text-center">
                  How well people are put in the right situations to deliver
                  excellence.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Positions.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Positions.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Positions.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );

  if (searchParams.get("concept") === "Strategy")
    return (
      <>
        {data && (
          <section className="bg-Greyscale200">
            <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-24">
              <p className="text-[44px] font-bold text-center w-[min(35rem,100%)] mx-auto">
                Strategy & Change Assessment Report
              </p>
              <div className=" text-center relative grid bg-white shadow-[6px_6px_12px_0px_rgba(27,27,27,0.20)] overflow-hidden rounded-[40px]">
                <div className="p-7 base:p-10 grid gap-5 rounded-t-[40px]">
                  <p className="text-[30px] font-bold">Congratulations</p>
                  <p className="text-[44px] font-bold">
                    {data.name} {data.last_name}
                  </p>
                  <p className="text-[30px] font-bold">
                    on completing the Strategy & Change Assessment!
                  </p>
                  <p className="text-[18px]">
                    Scores range from Level 1 to Level 5 - Level 5 most closely
                    aligns with the factors known to deliver exceptional
                    performance.
                  </p>
                </div>
                <div className="justify-self-center w-[103%] aspect-[2/1] border-Green500 border border-b-transparent text-white p-5 pb-0 [border-radius:50%_50%_0_0/100%_100%_0_0] -mb-5">
                  <div className="justify-self-center w-full h-full bg-Green500 text-white px-5 pt-8 md:pt-[5rem] base:pt-[10rem] [border-radius:50%_50%_0_0/100%_100%_0_0]">
                    <p className="text-[clamp(10px,4vw,30px)]">
                      Your overall score is
                    </p>
                    <p className="text-[clamp(50px,16vw,220px)] font-700">
                      Level {data.level}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-7 mt-10">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Personal Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for{" "}
                    <span className="text-Green500">personal</span> dimension
                    compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Green500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Personal_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.7
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Personal.map(
                        (assessment, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-Greyscale200 border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{assessment.qstn}</td>
                            <td className="px-6 py-4">{assessment.response}</td>
                            <td className="px-6 py-4">
                              {assessment.significance}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Team Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for <span className="text-Green500">team</span>{" "}
                    dimension compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Green500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Team_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.6
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Team.map((assessment, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white even:bg-Greyscale200 border-b"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{assessment.qstn}</td>
                          <td className="px-6 py-4">{assessment.response}</td>
                          <td className="px-6 py-4">
                            {assessment.significance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Organization Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for{" "}
                    <span className="text-Green500">organization</span>{" "}
                    dimension compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Green500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Organization_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.4
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Organization.map(
                        (assessment, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-Greyscale200 border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{assessment.qstn}</td>
                            <td className="px-6 py-4">{assessment.response}</td>
                            <td className="px-6 py-4">
                              {assessment.significance}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 38</p>
                <p className="font-bold text-[44px] text-center">
                  Fit-to-Purpose
                </p>
                <p className="font-bold text-[18px] text-center">
                  Fit-to-Purpose is your level of attractiveness to
                  stakeholders. It is the relevance of your value proposition to
                  key stakeholders and answers "How valuable are your actions to
                  key stakeholders?"
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Fit_to_Purpose.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Fit_to_Purpose.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Fit_to_Purpose.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 39</p>
                <p className="font-bold text-[44px] text-center">
                  Relative Advantage
                </p>
                <p className="font-bold text-[18px] text-center">
                  Relative Advantage is how much stakeholders prefer you to
                  others. It is your distintintiveness from alternatives and
                  answers "How unique from other options are you viewed by key
                  stakeholders?"
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Relative_Advantage.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Relative_Advantage.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Relative_Advantage.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
    
  if (searchParams.get("concept") === "Innovation")
    return (
      <>
        {data && (
          <section className="bg-Greyscale200">
            <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-24">
              <p className="text-[44px] font-bold text-center w-[min(35rem,100%)] mx-auto">
                Innovation & Analytics Assessment Report
              </p>
              <div className=" text-center relative grid bg-white shadow-[6px_6px_12px_0px_rgba(27,27,27,0.20)] overflow-hidden rounded-[40px]">
                <div className="p-7 base:p-10 grid gap-5 rounded-t-[40px]">
                  <p className="text-[30px] font-bold">Congratulations</p>
                  <p className="text-[44px] font-bold">
                    {data.name} {data.last_name}
                  </p>
                  <p className="text-[30px] font-bold">
                    on completing the Innovation & Analytics Assessment!
                  </p>
                  <p className="text-[18px]">
                    Scores range from Level 1 to Level 5 - Level 5 most closely
                    aligns with the factors known to deliver exceptional
                    performance.
                  </p>
                </div>
                <div className="justify-self-center w-[103%] aspect-[2/1] border-Blue500 border border-b-transparent text-white p-5 pb-0 [border-radius:50%_50%_0_0/100%_100%_0_0] -mb-5">
                  <div className="justify-self-center w-full h-full bg-Blue500 text-white px-5 pt-8 md:pt-[5rem] base:pt-[10rem] [border-radius:50%_50%_0_0/100%_100%_0_0]">
                    <p className="text-[clamp(10px,4vw,30px)]">
                      Your overall score is
                    </p>
                    <p className="text-[clamp(50px,16vw,220px)] font-700">
                      Level {data.level}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-7 mt-10">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Personal Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for{" "}
                    <span className="text-Blue500">personal</span> dimension
                    compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Blue500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Personal_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.9
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Personal.map(
                        (assessment, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-Greyscale200 border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{assessment.qstn}</td>
                            <td className="px-6 py-4">{assessment.response}</td>
                            <td className="px-6 py-4">
                              {assessment.significance}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Interpersonal Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for{" "}
                    <span className="text-Blue500">interpersonal</span>{" "}
                    dimension compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Blue500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Interpersonal_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        3.1
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Interpersonal.map(
                        (assessment, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-Greyscale200 border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{assessment.qstn}</td>
                            <td className="px-6 py-4">{assessment.response}</td>
                            <td className="px-6 py-4">
                              {assessment.significance}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Team Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for <span className="text-Blue500">team</span>{" "}
                    dimension compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Blue500 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Team_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.8
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Team.map((assessment, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white even:bg-Greyscale200 border-b"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{assessment.qstn}</td>
                          <td className="px-6 py-4">
                            {typeof assessment.response === "string"
                              ? assessment.response
                              : "Top Ranked - " + assessment.response[0].title}
                          </td>
                          <td className="px-6 py-4">
                            {assessment.significance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 36</p>
                <p className="font-bold text-[44px] text-center">Ideation</p>
                <p className="font-bold text-[18px] text-center">
                  Ideation is the capacity to find valuable new ideas.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Ideation.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Ideation.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Ideation.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 37</p>
                <p className="font-bold text-[44px] text-center">Validation</p>
                <p className="font-bold text-[18px] text-center">
                  Validation is effectiveness in determining which ideas to
                  pursue.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Validation.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Validation.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Validation.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 38</p>
                <p className="font-bold text-[44px] text-center">Adoption</p>
                <p className="font-bold text-[18px] text-center">
                  Adoption is how well valuable ideas are sold to and embraced
                  by others.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Adoption.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Adoption.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Adoption.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 39</p>
                <p className="font-bold text-[44px] text-center">Systems</p>
                <p className="font-bold text-[18px] text-center">
                  Systems are the incentives, processes, and platforms for
                  encouraging, resourcing, and rewarding innovative
                  contributions.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.System.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.System.Stop.choices.map((choice) => (
                      <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                        {choice}
                      </p>
                    ))}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.System.Start.choices.map((choice) => (
                      <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                        {choice}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );

  if (searchParams.get("concept") === "Execution")
    return (
      <>
        {data && (
          <section className="bg-Greyscale200">
            <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-24">
              <p className="text-[44px] font-bold text-center w-[min(35rem,100%)] mx-auto">
                Execution & Agility Assessment Report
              </p>
              <div className=" text-center relative grid bg-white shadow-[6px_6px_12px_0px_rgba(27,27,27,0.20)] overflow-hidden rounded-[40px]">
                <div className="p-7 base:p-10 grid gap-5 rounded-t-[40px]">
                  <p className="text-[30px] font-bold">Congratulations</p>
                  <p className="text-[44px] font-bold">
                    {data.name} {data.last_name}
                  </p>
                  <p className="text-[30px] font-bold">
                    on completing the Execution & Agility Assessment!
                  </p>
                  <p className="text-[18px]">
                    Scores range from Level 1 to Level 5 - Level 5 most closely
                    aligns with the factors known to deliver exceptional
                    performance.
                  </p>
                </div>
                <div className="justify-self-center w-[103%] aspect-[2/1] border-Yellow500 border border-b-transparent p-5 pb-0 [border-radius:50%_50%_0_0/100%_100%_0_0] -mb-5">
                  <div className="justify-self-center w-full h-full bg-Yellow500 px-5 pt-8 md:pt-[5rem] base:pt-[10rem] [border-radius:50%_50%_0_0/100%_100%_0_0]">
                    <p className="text-[clamp(10px,4vw,30px)]">
                      Your overall score is
                    </p>
                    <p className="text-[clamp(50px,16vw,220px)] font-700">
                      Level {data.level}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-7 mt-10">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Personal Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for{" "}
                    <span className="text-Yellow500">personal</span> dimension
                    compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Yellow500 w-[156px] h-[156px] rounded-full grid items-center justify-center">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Personal_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.9
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Personal.map(
                        (assessment, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-Greyscale200 border-b"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">{assessment.qstn}</td>
                            <td className="px-6 py-4">{assessment.response}</td>
                            <td className="px-6 py-4">
                              {assessment.significance}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-7">
                <p className="text-[44px] font-bold leading-tight text-center">
                  Team Dimension
                </p>
                <div className="justify-self-center grid base:flex text-center gap-4 justify-items-center bg-Greyscale400 py-5 px-2 base:py-0 base:pl-14 base:pr-0 rounded-lg base:rounded-[350px] justify-between">
                  <p className="text-[24px] base:text-[30px] font-bold base:text-left base:self-center w-[min(600px,100%)] base:w-[min(500px,100%)]">
                    Your score for <span className="text-Yellow500">team</span>{" "}
                    dimension compared to the global average
                  </p>
                  <div className="flex">
                    <div className="bg-Yellow500 w-[156px] h-[156px] rounded-full grid items-center justify-center">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        {data.points.Team_score.toFixed(1)}
                      </p>
                      <p className="text-xs -mt-12">Your Score</p>
                    </div>
                    <div className="bg-Greyscale700 w-[156px] h-[156px] rounded-full grid items-center justify-center text-Greyscale">
                      <p className="text-[70px] base:text-[80px] font-bold -mb-3">
                        2.7
                      </p>
                      <p className="text-xs -mt-12">Global Average</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-Greyscale200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Your Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Why This Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.assessment_info.Team.map((assessment, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white even:bg-Greyscale200 border-b"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          <td className="px-6 py-4">{assessment.qstn}</td>
                          <td className="px-6 py-4">{assessment.response}</td>
                          <td className="px-6 py-4">
                            {assessment.significance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 38</p>
                <p className="font-bold text-[44px] text-center">
                  Precision and Execution
                </p>
                <p className="font-bold text-[18px] text-center">
                  Precision and Execution is effectiveness in completing the
                  goal.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Precision_and_Execution.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Precision_and_Execution.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Precision_and_Execution.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <p className="font-bold text-[14px] text-center">QUESTION 39</p>
                <p className="font-bold text-[44px] text-center">
                  Operational Agility
                </p>
                <p className="font-bold text-[18px] text-center">
                  Operational Agility is effectiveness in adapting to dynamic
                  operating conditions.
                </p>
                <div className="grid gap-5 base:gap-2 base:items-start base:grid-cols-3">
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">
                      CONTINUE
                    </p>
                    {data.assessment_info.Operational_Agility.Continue.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">STOP</p>
                    {data.assessment_info.Operational_Agility.Stop.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                  <div className="grid gap-2">
                    <p className="font-bold text-[14px] text-center">START</p>
                    {data.assessment_info.Operational_Agility.Start.choices.map(
                      (choice) => (
                        <p className="text-center base:text-left text-[18px] bg-white p-3 rounded-md">
                          {choice}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
}
