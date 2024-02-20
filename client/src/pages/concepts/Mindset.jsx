import React from "react";
import AppButton100 from "../../components/reuseable/AppButtons";
import { useNavigate } from "react-router-dom";

export default function Mindset() {
  const navigate = useNavigate();
  return (
    <div className="grid gap-10">
      <div className="grid lg:grid-cols-[0.7fr,1fr] gap-[56px] md:gap-[64px] lg:gap-5 items-start">
        <div className="grid gap-10 lg:gap-16">
          <div className="grid gap-10 md:gap-0 lg:gap-10 md:grid-cols-2 lg:grid-cols-1">
            <p className="text-[56px] lg:text-[74px] font-medium lg:font-normal leading-tight w-3/4">
              Mindset & Culture
            </p>
            <AppButton100
              className="bg-Red500 text-Greyscale self-center lg:justify-self-start lg:px-16"
              label="Take FREE Assessment"
              onClick={() => navigate("../overview/mindset")}
            />
          </div>
          <p className="text-[18px]">
            Welcome to the timeless concepts resulting from rigorous research
            featured in Dr. Tom Hunsaker’s books and writings in the world’s top
            management venues, Harvard Business Review and MIT Sloan Management
            Review, that have become core practices in organizations worldwide.
          </p>
          <div className="grid gap-4 lg:gap-2 md:grid-cols-2 lg:grid">
            <AppButton100
              className="bg-Greyscale border-[1px] border-Red700 text-Red700 lg:text-sm"
              label="Listen to Overview"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 11.8472L20 10.1805V14.4666C19.408 14.1687 18.7232 14 18 14C15.8271 14 14 15.5226 14 17.5C14 19.4775 15.8271 21 18 21C20.1729 21 22 19.4775 22 17.5V1.81958L8 4.15291V15.4666C7.40804 15.1687 6.72317 15 6 15C3.82708 15 2 16.5226 2 18.5C2 20.4775 3.82708 22 6 22C8.17292 22 10 20.4775 10 18.5V11.8472ZM8 18.5C8 19.284 7.14079 20 6 20C4.85921 20 4 19.284 4 18.5C4 17.7161 4.85921 17 6 17C7.14079 17 8 17.7161 8 18.5ZM18 19C19.1408 19 20 18.284 20 17.5C20 16.7161 19.1408 16 18 16C16.8592 16 16 16.7161 16 17.5C16 18.284 16.8592 19 18 19ZM10 9.81958V5.84717L20 4.1805V8.15291L10 9.81958Z"
                    fill="#9D391A"
                  />
                </svg>
              }
            />
            <AppButton100
              className="bg-Greyscale border-[1px] border-Red700 text-Red700 lg:text-sm"
              label="Download Concepts Map"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.2929 9.29289L13 12.5858V2H11V12.5858L7.70711 9.29289L6.29289 10.7071L12 16.4142L17.7071 10.7071L16.2929 9.29289Z"
                    fill="#9D391A"
                  />
                  <path
                    d="M22 20V16H20V20H4V16H2V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20Z"
                    fill="#9D391A"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 items-start">
          <div className="grid gap-4 p-6 lg:p-4 rounded-[40px] bg-Greyscale">
            <div className="w-[214px] lg:w-[190px] mx-auto grid gap-5 relative place-items-center my-4 lg:my-1">
              <div className="flex gap-10 lg:gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="79"
                  height="79"
                  viewBox="0 0 79 79"
                  fill="none"
                >
                  <path
                    d="M78.7533 0.659912C78.7533 0.333929 78.4891 0.0696683 78.1631 0.0696682L72.8509 0.0696683C72.5249 0.0696683 72.2606 0.333929 72.2606 0.659912C72.2606 0.985895 72.5249 1.25016 72.8509 1.25016L77.5728 1.25016L77.5728 5.97211C77.5728 6.29809 77.8371 6.56235 78.1631 6.56235C78.4891 6.56235 78.7533 6.29809 78.7533 5.97211L78.7533 0.659912ZM1.03561 78.6221L78.5805 1.07728L77.7457 0.242547L0.200883 77.7874L1.03561 78.6221Z"
                    fill="#CB4A22"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="79"
                  height="79"
                  viewBox="0 0 79 79"
                  fill="none"
                >
                  <path
                    d="M78.3769 78.795C78.7028 78.795 78.9671 78.5307 78.9671 78.2047L78.9671 72.8926C78.9671 72.5666 78.7028 72.3023 78.3769 72.3023C78.0509 72.3023 77.7866 72.5666 77.7866 72.8926L77.7866 77.6145L73.0647 77.6145C72.7387 77.6145 72.4744 77.8788 72.4744 78.2047C72.4744 78.5307 72.7387 78.795 73.0647 78.795L78.3769 78.795ZM78.7942 77.7874L1.2494 0.242547L0.414666 1.07728L77.9595 78.6221L78.7942 77.7874Z"
                    fill="#CB4A22"
                  />
                </svg>
              </div>
              <div className="w-[41px] h-[41px] absolute rounded-[5px] bg-Greyscale [box-shadow:0_0_25px_30px_#CB4A22] rotate-45"></div>
              <div className="flex gap-10 lg:gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="79"
                  height="80"
                  viewBox="0 0 79 80"
                  fill="none"
                >
                  <path
                    d="M0.618253 0.509943C0.292269 0.509942 0.0280079 0.774203 0.0280095 1.10019L0.0280078 6.41238C0.0280095 6.73836 0.292268 7.00262 0.618252 7.00262C0.944232 7.00262 1.20849 6.73836 1.2085 6.41238L1.20849 1.69043L5.93045 1.69043C6.25643 1.69043 6.52069 1.42617 6.52069 1.10019C6.52069 0.774202 6.25643 0.509943 5.93045 0.509941L0.618253 0.509943ZM0.200883 1.51755L77.7457 79.0624L78.5805 78.2277L1.03561 0.682817L0.200883 1.51755Z"
                    fill="#CB4A22"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="79"
                  height="80"
                  viewBox="0 0 79 80"
                  fill="none"
                >
                  <path
                    d="M0.241787 78.645C0.241787 78.971 0.506049 79.2353 0.832031 79.2353L6.14423 79.2353C6.47021 79.2353 6.73447 78.971 6.73447 78.645C6.73447 78.319 6.47021 78.0548 6.14423 78.0548L1.42228 78.0548L1.42228 73.3328C1.42228 73.0068 1.15801 72.7426 0.832031 72.7426C0.506048 72.7426 0.241787 73.0068 0.241787 73.3328L0.241787 78.645ZM77.9595 0.682817L0.414666 78.2277L1.2494 79.0624L78.7942 1.51755L77.9595 0.682817Z"
                    fill="#CB4A22"
                  />
                </svg>
              </div>
            </div>
            <div className="">
              <p className="text-[18px] lg:text-base font-bold">
                Mindset Cycle
              </p>
              <p className="lg:text-sm">Evaluate and Elevate</p>
            </div>
          </div>
          <div className="grid gap-4 p-6 lg:p-4 rounded-[40px] bg-Greyscale">
            <div className="w-[214px] lg:w-[190px] mx-auto grid place-items-center relative">
              <div className="w-[60px] lg:w-[29px] h-[60px] lg:h-[29px] rounded-full bg-Red500 [box-shadow:0_0_50px_50px_#CB4A22,0_0_90px_90px_#FDFDFD] my-[75.5px] lg:my-[80px]">
                <div className="w-1 h-full absolute top-0 -translate-x-[50%] left-1/2 bg-Greyscale"></div>
                <div className="w-full h-1 absolute left-0 -translate-y-[50%] top-1/2 bg-Greyscale"></div>
              </div>
            </div>
            <div className="">
              <p className="text-[18px] lg:text-base font-bold">
                4 Universal Desires
              </p>
              <p className="lg:text-sm">Read and Tap Incentives</p>
            </div>
          </div>
          <div className="grid gap-4 p-6 lg:p-4 rounded-[40px] bg-Greyscale">
            <div className="w-[214px] lg:w-[190px] mx-auto grid gap-[0_20px] place-items-center relative grid-cols-2 p-7 lg:p-4">
              <div className="w-[77.5px] h-[77.5px] bg-Red500 rounded-full col-span-2"></div>
              <div className="w-[77.5px] h-[77.5px] bg-Red500 rounded-full"></div>
              <div className="w-[77.5px] h-[77.5px] bg-Red500 rounded-full"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="164"
                height="160"
                viewBox="0 0 164 160"
                fill="none"
                className="absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2"
              >
                <g filter="url(#filter3_f_124_14703)">
                  <circle
                    cx="80.1116"
                    cy="83.4807"
                    r="49.9333"
                    transform="rotate(-180 80.1116 83.4807)"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter4_b_124_14703)">
                  <path
                    d="M78.0741 35.2676C79.6137 32.6009 83.4627 32.6009 85.0023 35.2676L129.966 113.148C131.506 115.814 129.581 119.148 126.502 119.148L36.5741 119.148C33.4949 119.148 31.5704 115.814 33.11 113.148L78.0741 35.2676Z"
                    fill="url(#paint0_linear_124_14703)"
                    fill-opacity="0.3"
                  />
                </g>
                <g filter="url(#filter5_b_124_14703)">
                  <path
                    d="M78.0741 35.2671C79.6137 32.6004 83.4627 32.6004 85.0023 35.2671L129.966 113.147C131.506 115.814 129.581 119.147 126.502 119.147L36.5741 119.147C33.4949 119.147 31.5704 115.814 33.11 113.147L78.0741 35.2671Z"
                    fill="url(#paint1_linear_124_14703)"
                  />
                  <path
                    d="M78.0741 35.2671C79.6137 32.6004 83.4627 32.6004 85.0023 35.2671L129.966 113.147C131.506 115.814 129.581 119.147 126.502 119.147L36.5741 119.147C33.4949 119.147 31.5704 115.814 33.11 113.147L78.0741 35.2671Z"
                    fill="url(#paint2_radial_124_14703)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter3_f_124_14703"
                    x="3.95871"
                    y="7.32736"
                    width="152.306"
                    height="152.307"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="13.11"
                      result="effect1_foregroundBlur_124_14703"
                    />
                  </filter>
                  <filter
                    id="filter4_b_124_14703"
                    x="2.56836"
                    y="3.26758"
                    width="157.939"
                    height="145.88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_124_14703"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_124_14703"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_b_124_14703"
                    x="2.56836"
                    y="3.26709"
                    width="157.939"
                    height="145.88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_124_14703"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_124_14703"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter6_b_124_14703"
                    x="2.56836"
                    y="3.26709"
                    width="157.939"
                    height="145.88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_124_14703"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_124_14703"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_124_14703"
                    x1="34.4424"
                    y1="40.3243"
                    x2="163.794"
                    y2="107.301"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EF3C23" stop-opacity="0.09" />
                    <stop offset="0.447036" stop-color="#EF3C23" />
                    <stop offset="1" stop-color="#EF3C23" stop-opacity="0.62" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_124_14703"
                    x1="38.8645"
                    y1="24.9871"
                    x2="151.194"
                    y2="90.5725"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.188941"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop
                      offset="0.526042"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0.17" />
                  </linearGradient>
                  <radialGradient
                    id="paint2_radial_124_14703"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(39.5278 145.184) rotate(-50.9773) scale(94.1138 153.887)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="">
              <p className="text-[18px] lg:text-base font-bold">
                3Cs of Purpose
              </p>
              <p className="lg:text-sm">Design and Align</p>
            </div>
          </div>
          <div className="grid gap-4 p-6 lg:p-4 rounded-[40px] bg-Greyscale lg:col-start-2">
            <div className="w-[214px] lg:w-[190px] mx-auto grid gap-5 place-items-center relative p-[15.5px] lg:p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="181"
                height="180"
                viewBox="0 0 181 180"
                fill="none"
              >
                <circle cx="90.5001" cy="90.0001" r="89.88" fill="white" />
                <circle
                  cx="90.5001"
                  cy="90.0001"
                  r="89.88"
                  fill="url(#paint0_radial_124_24163)"
                />
                <path
                  d="M90 45.7736C90 46.0497 90.2239 46.2736 90.5 46.2736C90.7761 46.2736 91 46.0497 91 45.7736H90ZM90.8536 9.75338C90.6583 9.55812 90.3417 9.55812 90.1464 9.75338L86.9645 12.9354C86.7692 13.1306 86.7692 13.4472 86.9645 13.6425C87.1597 13.8377 87.4763 13.8377 87.6716 13.6425L90.5 10.814L93.3284 13.6425C93.5237 13.8377 93.8403 13.8377 94.0355 13.6425C94.2308 13.4472 94.2308 13.1306 94.0355 12.9354L90.8536 9.75338ZM91 45.7736V10.1069H90V45.7736H91Z"
                  fill="#CB4A22"
                />
                <path
                  d="M59.8637 58.8535C60.0589 59.0487 60.3755 59.0487 60.5708 58.8535C60.766 58.6582 60.766 58.3416 60.5708 58.1464L59.8637 58.8535ZM34.9971 32.7798C34.7209 32.7798 34.4971 33.0036 34.4971 33.2798L34.4971 37.7798C34.4971 38.0559 34.7209 38.2798 34.9971 38.2798C35.2732 38.2798 35.4971 38.0559 35.4971 37.7798L35.4971 33.7798L39.4971 33.7798C39.7732 33.7798 39.9971 33.5559 39.9971 33.2798C39.9971 33.0036 39.7732 32.7798 39.4971 32.7798L34.9971 32.7798ZM60.5708 58.1464L35.3506 32.9262L34.6435 33.6333L59.8637 58.8535L60.5708 58.1464Z"
                  fill="#CB4A22"
                />
                <path
                  d="M121.669 58.6508C121.474 58.846 121.474 59.1626 121.669 59.3579C121.865 59.5531 122.181 59.5531 122.377 59.3579L121.669 58.6508ZM147.743 33.7842C147.743 33.508 147.519 33.2842 147.243 33.2842L142.743 33.2842C142.467 33.2842 142.243 33.508 142.243 33.7842C142.243 34.0603 142.467 34.2842 142.743 34.2842L146.743 34.2842L146.743 38.2842C146.743 38.5603 146.967 38.7842 147.243 38.7842C147.519 38.7842 147.743 38.5603 147.743 38.2842L147.743 33.7842ZM122.377 59.3579L147.597 34.1377L146.89 33.4306L121.669 58.6508L122.377 59.3579Z"
                  fill="#CB4A22"
                />
                <path
                  d="M60.0659 122.087C60.2611 121.891 60.2611 121.575 60.0659 121.379C59.8706 121.184 59.554 121.184 59.3588 121.379L60.0659 122.087ZM33.9922 146.953C33.9922 147.229 34.216 147.453 34.4922 147.453L38.9922 147.453C39.2683 147.453 39.4922 147.229 39.4922 146.953C39.4922 146.677 39.2683 146.453 38.9922 146.453L34.9922 146.453L34.9922 142.453C34.9922 142.177 34.7683 141.953 34.4922 141.953C34.216 141.953 33.9922 142.177 33.9922 142.453L33.9922 146.953ZM59.3588 121.379L34.1386 146.6L34.8457 147.307L60.0659 122.087L59.3588 121.379Z"
                  fill="#CB4A22"
                />
                <path
                  d="M121.669 122.087C121.474 121.891 121.474 121.575 121.669 121.379C121.865 121.184 122.181 121.184 122.377 121.379L121.669 122.087ZM147.743 146.953C147.743 147.229 147.519 147.453 147.243 147.453L142.743 147.453C142.467 147.453 142.243 147.229 142.243 146.953C142.243 146.677 142.467 146.453 142.743 146.453L146.743 146.453L146.743 142.453C146.743 142.177 146.967 141.953 147.243 141.953C147.519 141.953 147.743 142.177 147.743 142.453L147.743 146.953ZM122.377 121.379L147.597 146.6L146.89 147.307L121.669 122.087L122.377 121.379Z"
                  fill="#CB4A22"
                />
                <path
                  d="M91 134.227C91 133.951 90.7761 133.727 90.5 133.727C90.2239 133.727 90 133.951 90 134.227H91ZM90.1464 170.247C90.3417 170.442 90.6583 170.442 90.8536 170.247L94.0355 167.065C94.2308 166.87 94.2308 166.553 94.0355 166.358C93.8403 166.163 93.5237 166.163 93.3284 166.358L90.5 169.186L87.6716 166.358C87.4763 166.163 87.1597 166.163 86.9645 166.358C86.7692 166.553 86.7692 166.87 86.9645 167.065L90.1464 170.247ZM90 134.227V169.894H91V134.227H90Z"
                  fill="#CB4A22"
                />
                <path
                  d="M46.987 90.5C47.2631 90.5 47.487 90.2761 47.487 90C47.487 89.7239 47.2631 89.5 46.987 89.5V90.5ZM10.9668 89.6464C10.7715 89.8417 10.7715 90.1583 10.9668 90.3536L14.1487 93.5355C14.344 93.7308 14.6606 93.7308 14.8558 93.5355C15.0511 93.3403 15.0511 93.0237 14.8558 92.8284L12.0274 90L14.8558 87.1716C15.0511 86.9763 15.0511 86.6597 14.8558 86.4645C14.6606 86.2692 14.344 86.2692 14.1487 86.4645L10.9668 89.6464ZM46.987 89.5H11.3203V90.5H46.987V89.5Z"
                  fill="#CB4A22"
                />
                <path
                  d="M135.44 90.2134C135.164 90.2134 134.94 90.4372 134.94 90.7134C134.94 90.9895 135.164 91.2134 135.44 91.2134V90.2134ZM171.46 91.0669C171.655 90.8717 171.655 90.5551 171.46 90.3598L168.278 87.1778C168.083 86.9826 167.766 86.9826 167.571 87.1778C167.376 87.3731 167.376 87.6897 167.571 87.885L170.399 90.7134L167.571 93.5418C167.376 93.7371 167.376 94.0537 167.571 94.2489C167.766 94.4442 168.083 94.4442 168.278 94.2489L171.46 91.0669ZM135.44 91.2134H171.106V90.2134H135.44V91.2134Z"
                  fill="#CB4A22"
                />
                <circle
                  cx="91.2133"
                  cy="89.9999"
                  r="39.9467"
                  fill="url(#paint1_radial_124_24163)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_124_24163"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(90.5001 90.0001) rotate(89.5907) scale(99.8692)"
                  >
                    <stop
                      offset="0.659316"
                      stop-color="white"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="#CB4A22" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_124_24163"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(91.2133 89.9999) rotate(89.5061) scale(128.722)"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="0.109375" stop-color="#CB4A22" />
                    <stop
                      offset="0.28125"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="">
              <p className="text-[18px] lg:text-base font-bold">
                Complete Capacity
              </p>
              <p className="lg:text-sm">Effectively Role Fit</p>
            </div>
          </div>
          <div className="grid gap-4 p-6 lg:p-4 rounded-[40px] bg-Greyscale lg:col-start-3">
            <div className="w-[214px] lg:w-[190px] mx-auto grid gap-5 place-items-center relative p-[15.5px] lg:p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
              >
                <g filter="url(#filter0_i_124_20500)">
                  <path
                    d="M58.8262 32.9124C58.8262 28.9699 62.0222 25.7739 65.9647 25.7739H90.7264C94.6689 25.7739 97.865 28.97 97.865 32.9124V41.9471C97.865 52.7274 89.1258 61.4665 78.3456 61.4665C67.5653 61.4665 58.8262 52.7274 58.8262 41.9471V32.9124Z"
                    fill="#CB4A22"
                  />
                  <path
                    d="M58.8262 32.9124C58.8262 28.9699 62.0222 25.7739 65.9647 25.7739H90.7264C94.6689 25.7739 97.865 28.97 97.865 32.9124V41.9471C97.865 52.7274 89.1258 61.4665 78.3456 61.4665C67.5653 61.4665 58.8262 52.7274 58.8262 41.9471V32.9124Z"
                    fill="url(#paint0_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter1_i_124_20500)">
                  <circle
                    cx="78.3453"
                    cy="11.2741"
                    r="11.1539"
                    fill="#CB4A22"
                  />
                  <circle
                    cx="78.3453"
                    cy="11.2741"
                    r="11.1539"
                    fill="url(#paint1_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter2_i_124_20500)">
                  <path
                    d="M0.333008 32.9124C0.333008 28.9699 3.52903 25.7739 7.47153 25.7739H32.2333C36.1758 25.7739 39.3718 28.97 39.3718 32.9124V41.9471C39.3718 52.7274 30.6327 61.4665 19.8524 61.4665C9.07213 61.4665 0.333008 52.7274 0.333008 41.9471V32.9124Z"
                    fill="#CB4A22"
                  />
                  <path
                    d="M0.333008 32.9124C0.333008 28.9699 3.52903 25.7739 7.47153 25.7739H32.2333C36.1758 25.7739 39.3718 28.97 39.3718 32.9124V41.9471C39.3718 52.7274 30.6327 61.4665 19.8524 61.4665C9.07213 61.4665 0.333008 52.7274 0.333008 41.9471V32.9124Z"
                    fill="url(#paint2_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter3_i_124_20500)">
                  <circle
                    cx="19.8522"
                    cy="11.2741"
                    r="11.1539"
                    fill="#CB4A22"
                  />
                  <circle
                    cx="19.8522"
                    cy="11.2741"
                    r="11.1539"
                    fill="url(#paint3_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter4_i_124_20500)">
                  <path
                    d="M30.293 44.326C30.293 40.3835 33.489 37.1875 37.4315 37.1875H62.1932C66.1357 37.1875 69.3318 40.3835 69.3318 44.326V53.3607C69.3318 64.141 60.5926 72.8801 49.8124 72.8801C39.0321 72.8801 30.293 64.141 30.293 53.3607V44.326Z"
                    fill="#CB4A22"
                  />
                  <path
                    d="M30.293 44.326C30.293 40.3835 33.489 37.1875 37.4315 37.1875H62.1932C66.1357 37.1875 69.3318 40.3835 69.3318 44.326V53.3607C69.3318 64.141 60.5926 72.8801 49.8124 72.8801C39.0321 72.8801 30.293 64.141 30.293 53.3607V44.326Z"
                    fill="url(#paint4_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter5_i_124_20500)">
                  <circle
                    cx="49.8121"
                    cy="22.6876"
                    r="11.1539"
                    fill="#CB4A22"
                  />
                  <circle
                    cx="49.8121"
                    cy="22.6876"
                    r="11.1539"
                    fill="url(#paint5_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter6_i_124_20500)">
                  <path
                    d="M140.146 139.912C140.146 135.97 143.343 132.774 147.285 132.774H172.047C175.989 132.774 179.185 135.97 179.185 139.912V148.947C179.185 159.727 170.446 168.467 159.666 168.467C148.886 168.467 140.146 159.727 140.146 148.947V139.912Z"
                    fill="#CB4A22"
                  />
                  <path
                    d="M140.146 139.912C140.146 135.97 143.343 132.774 147.285 132.774H172.047C175.989 132.774 179.185 135.97 179.185 139.912V148.947C179.185 159.727 170.446 168.467 159.666 168.467C148.886 168.467 140.146 159.727 140.146 148.947V139.912Z"
                    fill="url(#paint6_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter7_i_124_20500)">
                  <circle
                    cx="159.666"
                    cy="118.274"
                    r="11.1539"
                    fill="#CB4A22"
                  />
                  <circle
                    cx="159.666"
                    cy="118.274"
                    r="11.1539"
                    fill="url(#paint7_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter8_i_124_20500)">
                  <path
                    d="M81.6533 139.912C81.6533 135.97 84.8493 132.774 88.7918 132.774H113.554C117.496 132.774 120.692 135.97 120.692 139.912V148.947C120.692 159.727 111.953 168.467 101.173 168.467C90.3924 168.467 81.6533 159.727 81.6533 148.947V139.912Z"
                    fill="#CB4A22"
                  />
                  <path
                    d="M81.6533 139.912C81.6533 135.97 84.8493 132.774 88.7918 132.774H113.554C117.496 132.774 120.692 135.97 120.692 139.912V148.947C120.692 159.727 111.953 168.467 101.173 168.467C90.3924 168.467 81.6533 159.727 81.6533 148.947V139.912Z"
                    fill="url(#paint8_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter9_i_124_20500)">
                  <circle
                    cx="101.172"
                    cy="118.274"
                    r="11.1539"
                    fill="#CB4A22"
                  />
                  <circle
                    cx="101.172"
                    cy="118.274"
                    r="11.1539"
                    fill="url(#paint9_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter10_i_124_20500)">
                  <path
                    d="M111.613 151.326C111.613 147.384 114.809 144.188 118.752 144.188H143.514C147.456 144.188 150.652 147.384 150.652 151.326V160.361C150.652 171.141 141.913 179.88 131.133 179.88C120.352 179.88 111.613 171.141 111.613 160.361V151.326Z"
                    fill="#CB4A22"
                  />
                  <path
                    d="M111.613 151.326C111.613 147.384 114.809 144.188 118.752 144.188H143.514C147.456 144.188 150.652 147.384 150.652 151.326V160.361C150.652 171.141 141.913 179.88 131.133 179.88C120.352 179.88 111.613 171.141 111.613 160.361V151.326Z"
                    fill="url(#paint10_linear_124_20500)"
                  />
                </g>
                <g filter="url(#filter11_i_124_20500)">
                  <circle
                    cx="131.132"
                    cy="129.688"
                    r="11.1539"
                    fill="#CB4A22"
                  />
                  <circle
                    cx="131.132"
                    cy="129.688"
                    r="11.1539"
                    fill="url(#paint11_linear_124_20500)"
                  />
                </g>
                <path
                  d="M151.815 100.188C151.926 100.44 152.221 100.556 152.474 100.445L156.594 98.6362C156.847 98.5253 156.962 98.2303 156.851 97.9775C156.74 97.7246 156.445 97.6096 156.192 97.7205L152.53 99.3279L150.922 95.6651C150.811 95.4122 150.516 95.2972 150.263 95.4081C150.011 95.5191 149.896 95.8141 150.006 96.0669L151.815 100.188ZM101.6 22.0193C141.919 24.1414 166.477 62.1891 151.807 99.805L152.738 100.168C167.657 61.9175 142.653 23.1786 101.652 21.0207L101.6 22.0193Z"
                  fill="#CB4A22"
                />
                <path
                  d="M25.0807 78.3856C24.9698 78.1328 24.6748 78.0177 24.4219 78.1287L20.3013 79.937C20.0484 80.048 19.9334 80.3429 20.0443 80.5958C20.1553 80.8486 20.4502 80.9637 20.7031 80.8527L24.3659 79.2453L25.9733 82.9082C26.0843 83.161 26.3792 83.2761 26.6321 83.1651C26.885 83.0541 27 82.7592 26.889 82.5063L25.0807 78.3856ZM75.2958 156.554C34.9761 154.432 10.418 116.384 25.0887 78.7682L24.157 78.4049C9.23875 116.656 34.243 155.395 75.2433 157.553L75.2958 156.554Z"
                  fill="#CB4A22"
                />
                <defs>
                  <filter
                    id="filter0_i_124_20500"
                    x="58.8262"
                    y="25.7739"
                    width="39.0391"
                    height="39.6924"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter1_i_124_20500"
                    x="67.1914"
                    y="0.120117"
                    width="22.3076"
                    height="26.3081"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter2_i_124_20500"
                    x="0.333008"
                    y="25.7739"
                    width="39.0391"
                    height="39.6924"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter3_i_124_20500"
                    x="8.69824"
                    y="0.120117"
                    width="22.3076"
                    height="26.3081"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter4_i_124_20500"
                    x="30.293"
                    y="37.1875"
                    width="39.0391"
                    height="39.6924"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter5_i_124_20500"
                    x="38.6582"
                    y="11.5337"
                    width="22.3076"
                    height="26.3081"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter6_i_124_20500"
                    x="140.146"
                    y="132.774"
                    width="39.0391"
                    height="39.6924"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter7_i_124_20500"
                    x="148.512"
                    y="107.12"
                    width="22.3076"
                    height="26.3081"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter8_i_124_20500"
                    x="81.6533"
                    y="132.774"
                    width="39.0391"
                    height="39.6924"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter9_i_124_20500"
                    x="90.0186"
                    y="107.12"
                    width="22.3076"
                    height="26.3081"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter10_i_124_20500"
                    x="111.613"
                    y="144.188"
                    width="39.0391"
                    height="39.6924"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <filter
                    id="filter11_i_124_20500"
                    x="119.979"
                    y="118.534"
                    width="22.3076"
                    height="26.3081"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_124_20500"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_124_20500"
                    x1="69.4224"
                    y1="50.3126"
                    x2="96.1919"
                    y2="28.5624"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop
                      offset="0.288658"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="white" stop-opacity="0.87" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_124_20500"
                    x1="85.5954"
                    y1="2.3509"
                    x2="76.6723"
                    y2="13.5048"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_124_20500"
                    x1="10.9293"
                    y1="50.3126"
                    x2="37.6987"
                    y2="28.5624"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop
                      offset="0.288658"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="white" stop-opacity="0.87" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_124_20500"
                    x1="27.1022"
                    y1="2.3509"
                    x2="18.1791"
                    y2="13.5048"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_124_20500"
                    x1="40.8892"
                    y1="61.7262"
                    x2="67.6587"
                    y2="39.976"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop
                      offset="0.288658"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="white" stop-opacity="0.87" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_124_20500"
                    x1="57.0622"
                    y1="13.7645"
                    x2="48.1391"
                    y2="24.9184"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_124_20500"
                    x1="150.743"
                    y1="157.313"
                    x2="177.512"
                    y2="135.562"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop
                      offset="0.288658"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="white" stop-opacity="0.87" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_124_20500"
                    x1="166.916"
                    y1="109.351"
                    x2="157.993"
                    y2="120.505"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_124_20500"
                    x1="92.2496"
                    y1="157.313"
                    x2="119.019"
                    y2="135.562"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop
                      offset="0.288658"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="white" stop-opacity="0.87" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_124_20500"
                    x1="108.423"
                    y1="109.351"
                    x2="99.4994"
                    y2="120.505"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_124_20500"
                    x1="122.21"
                    y1="168.726"
                    x2="148.979"
                    y2="146.976"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop
                      offset="0.288658"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="white" stop-opacity="0.87" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_124_20500"
                    x1="138.383"
                    y1="120.764"
                    x2="129.459"
                    y2="131.918"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="">
              <p className="text-[18px] lg:text-base font-bold">
                Free AND Clear Process
              </p>
              <p className="lg:text-sm">Build Efficient Systems</p>
            </div>
          </div>
          <div className="grid gap-4 p-6 lg:p-4 rounded-[40px] bg-Greyscale lg:row-start-3 lg:col-start-3">
            <div className="w-[214px] lg:w-[190px] mx-auto grid gap-5 place-items-center relative py-[22px] lg:p-0">
              <div className="w-[162.64px] h-[135.533px] [background:linear-gradient(180deg,#FFF_8.54%,rgba(255,255,255,0.00)100%)] absolute top-0"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="162"
                height="167"
                viewBox="0 0 162 167"
                fill="none"
              >
                <g clip-path="url(#clip0_124_28650)">
                  <g opacity="0.7">
                    <rect
                      x="0.881836"
                      y="0.237793"
                      width="40.1457"
                      height="165.936"
                      fill="white"
                    />
                    <rect
                      x="0.881836"
                      y="0.237793"
                      width="40.1457"
                      height="165.936"
                      fill="url(#paint0_linear_124_28650)"
                    />
                  </g>
                  <g opacity="0.8">
                    <rect
                      x="41.0293"
                      y="0.237793"
                      width="40.1457"
                      height="165.936"
                      fill="white"
                    />
                    <rect
                      x="41.0293"
                      y="0.237793"
                      width="40.1457"
                      height="165.936"
                      fill="url(#paint1_linear_124_28650)"
                    />
                  </g>
                  <g opacity="0.9">
                    <rect
                      x="81.1738"
                      y="0.237793"
                      width="40.1457"
                      height="165.936"
                      fill="white"
                    />
                    <rect
                      x="81.1738"
                      y="0.237793"
                      width="40.1457"
                      height="165.936"
                      fill="url(#paint2_linear_124_28650)"
                    />
                  </g>
                  <rect
                    x="121.321"
                    y="0.237793"
                    width="40.1457"
                    height="165.936"
                    fill="white"
                  />
                  <rect
                    x="121.321"
                    y="0.237793"
                    width="40.1457"
                    height="165.936"
                    fill="url(#paint3_linear_124_28650)"
                  />
                  <rect
                    opacity="0.7"
                    width="40.1457"
                    height="97.688"
                    transform="matrix(-1 0 0 1 41.0293 68.4854)"
                    fill="url(#paint4_linear_124_28650)"
                  />
                  <rect
                    opacity="0.8"
                    width="40.1457"
                    height="120.437"
                    transform="matrix(-1 0 0 1 81.1738 45.7363)"
                    fill="url(#paint5_linear_124_28650)"
                  />
                  <rect
                    opacity="0.9"
                    width="40.1457"
                    height="143.186"
                    transform="matrix(-1 0 0 1 121.321 22.9873)"
                    fill="url(#paint6_linear_124_28650)"
                  />
                  <rect
                    width="40.1457"
                    height="165.936"
                    transform="matrix(-1 0 0 1 161.466 0.237793)"
                    fill="url(#paint7_linear_124_28650)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_124_28650"
                    x1="0.881836"
                    y1="6.38356"
                    x2="74.2712"
                    y2="23.4814"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_124_28650"
                    x1="41.0293"
                    y1="6.38356"
                    x2="114.419"
                    y2="23.4814"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_124_28650"
                    x1="81.1738"
                    y1="6.38356"
                    x2="154.563"
                    y2="23.4814"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_124_28650"
                    x1="121.321"
                    y1="6.38356"
                    x2="194.711"
                    y2="23.4814"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_124_28650"
                    x1="21.4111"
                    y1="9.36734"
                    x2="56.2091"
                    y2="45.1292"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" stop-opacity="0" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_124_28650"
                    x1="21.4111"
                    y1="11.5488"
                    x2="63.6274"
                    y2="46.7394"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" stop-opacity="0" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_124_28650"
                    x1="21.4111"
                    y1="13.7302"
                    x2="69.3801"
                    y2="47.3632"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" stop-opacity="0" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_124_28650"
                    x1="21.4111"
                    y1="15.9116"
                    x2="73.7889"
                    y2="47.6011"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" stop-opacity="0" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <clipPath id="clip0_124_28650">
                    <rect
                      x="0.881836"
                      y="0.237793"
                      width="160.583"
                      height="165.936"
                      rx="8"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="">
              <p className="text-[18px] lg:text-base font-bold">
                Adaptive Culture Blueprint
              </p>
              <p className="lg:text-sm">Match Culture to Need</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-[56px] mb-10">Impact</p>
        <div className="grid justify-center md:justify-start md:grid-cols-2 lg:grid-cols-3 md:w-fit">
          <svg
            width="314"
            height="313"
            viewBox="0 0 314 313"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_548_22035)">
              <path
                d="M203.708 42.8309L203.859 42.9598L204.057 42.9756L265.885 47.9095L270.819 109.738L270.834 109.936L270.963 110.087L311.193 157.295L270.963 204.503L270.834 204.654L270.819 204.853L265.885 266.681L204.057 271.615L203.859 271.631L203.708 271.759L156.5 311.99L109.292 271.759L109.141 271.631L108.943 271.615L47.1152 266.681L42.1814 204.853L42.1655 204.654L42.0366 204.503L1.8066 157.295L42.0366 110.087L42.1655 109.936L42.1814 109.738L47.1152 47.9095L108.943 42.9756L109.141 42.9598L109.292 42.8309L156.5 2.60054L203.708 42.8309Z"
                stroke="#CB4A22"
                stroke-width="1.22783"
              />
              <path
                d="M130.699 131.863C129.775 131.863 128.971 131.695 128.287 131.359C127.603 131.023 127.075 130.555 126.703 129.955C126.331 129.355 126.145 128.659 126.145 127.867H127.729C127.729 128.359 127.843 128.815 128.071 129.235C128.299 129.643 128.629 129.973 129.061 130.225C129.505 130.465 130.051 130.585 130.699 130.585C131.551 130.585 132.211 130.381 132.679 129.973C133.147 129.565 133.381 129.055 133.381 128.443C133.381 127.939 133.273 127.537 133.057 127.237C132.841 126.925 132.547 126.673 132.175 126.481C131.815 126.289 131.395 126.121 130.915 125.977C130.447 125.833 129.955 125.671 129.439 125.491C128.467 125.155 127.747 124.741 127.279 124.249C126.811 123.745 126.577 123.091 126.577 122.287C126.565 121.615 126.721 121.021 127.045 120.505C127.369 119.977 127.825 119.569 128.413 119.281C129.013 118.981 129.721 118.831 130.537 118.831C131.341 118.831 132.037 118.981 132.625 119.281C133.225 119.581 133.687 119.995 134.011 120.523C134.347 121.051 134.521 121.651 134.533 122.323H132.949C132.949 121.975 132.859 121.633 132.679 121.297C132.499 120.949 132.223 120.667 131.851 120.451C131.491 120.235 131.035 120.127 130.483 120.127C129.799 120.115 129.235 120.289 128.791 120.649C128.359 121.009 128.143 121.507 128.143 122.143C128.143 122.683 128.293 123.097 128.593 123.385C128.905 123.673 129.337 123.913 129.889 124.105C130.441 124.285 131.077 124.495 131.797 124.735C132.397 124.951 132.937 125.203 133.417 125.491C133.897 125.779 134.269 126.151 134.533 126.607C134.809 127.063 134.947 127.645 134.947 128.353C134.947 128.953 134.791 129.523 134.479 130.063C134.167 130.591 133.693 131.023 133.057 131.359C132.433 131.695 131.647 131.863 130.699 131.863ZM140.259 131.863C139.203 131.863 138.363 131.545 137.739 130.909C137.115 130.261 136.803 129.271 136.803 127.939V122.719H138.315V127.777C138.315 129.637 139.077 130.567 140.601 130.567C141.381 130.567 142.023 130.291 142.527 129.739C143.043 129.175 143.301 128.377 143.301 127.345V122.719H144.813V131.647H143.445L143.337 130.045C143.061 130.609 142.647 131.053 142.095 131.377C141.555 131.701 140.943 131.863 140.259 131.863ZM147.302 135.607V122.719H148.67L148.814 124.195C149.102 123.763 149.51 123.373 150.038 123.025C150.578 122.677 151.262 122.503 152.09 122.503C152.978 122.503 153.752 122.707 154.412 123.115C155.072 123.523 155.582 124.081 155.942 124.789C156.314 125.497 156.5 126.301 156.5 127.201C156.5 128.101 156.314 128.905 155.942 129.613C155.582 130.309 155.066 130.861 154.394 131.269C153.734 131.665 152.96 131.863 152.072 131.863C151.34 131.863 150.686 131.713 150.11 131.413C149.546 131.113 149.114 130.693 148.814 130.153V135.607H147.302ZM151.91 130.549C152.51 130.549 153.038 130.411 153.494 130.135C153.95 129.847 154.31 129.451 154.574 128.947C154.838 128.443 154.97 127.855 154.97 127.183C154.97 126.511 154.838 125.923 154.574 125.419C154.31 124.915 153.95 124.525 153.494 124.249C153.038 123.961 152.51 123.817 151.91 123.817C151.31 123.817 150.782 123.961 150.326 124.249C149.87 124.525 149.51 124.915 149.246 125.419C148.982 125.923 148.85 126.511 148.85 127.183C148.85 127.855 148.982 128.443 149.246 128.947C149.51 129.451 149.87 129.847 150.326 130.135C150.782 130.411 151.31 130.549 151.91 130.549ZM162.618 131.863C161.766 131.863 161.01 131.671 160.35 131.287C159.69 130.891 159.168 130.345 158.784 129.649C158.412 128.953 158.226 128.131 158.226 127.183C158.226 126.247 158.412 125.431 158.784 124.735C159.156 124.027 159.672 123.481 160.332 123.097C161.004 122.701 161.778 122.503 162.654 122.503C163.518 122.503 164.262 122.701 164.886 123.097C165.522 123.481 166.008 123.991 166.344 124.627C166.68 125.263 166.848 125.947 166.848 126.679C166.848 126.811 166.842 126.943 166.83 127.075C166.83 127.207 166.83 127.357 166.83 127.525H159.72C159.756 128.209 159.912 128.779 160.188 129.235C160.476 129.679 160.83 130.015 161.25 130.243C161.682 130.471 162.138 130.585 162.618 130.585C163.242 130.585 163.764 130.441 164.184 130.153C164.604 129.865 164.91 129.475 165.102 128.983H166.596C166.356 129.811 165.894 130.501 165.21 131.053C164.538 131.593 163.674 131.863 162.618 131.863ZM162.618 123.781C161.898 123.781 161.256 124.003 160.692 124.447C160.14 124.879 159.822 125.515 159.738 126.355H165.354C165.318 125.551 165.042 124.921 164.526 124.465C164.01 124.009 163.374 123.781 162.618 123.781ZM168.852 131.647V122.719H170.22L170.346 124.429C170.622 123.841 171.042 123.373 171.606 123.025C172.17 122.677 172.866 122.503 173.694 122.503V124.087H173.28C172.752 124.087 172.266 124.183 171.822 124.375C171.378 124.555 171.024 124.867 170.76 125.311C170.496 125.755 170.364 126.367 170.364 127.147V131.647H168.852ZM176.309 120.739C176.009 120.739 175.757 120.643 175.553 120.451C175.361 120.247 175.265 119.995 175.265 119.695C175.265 119.407 175.361 119.167 175.553 118.975C175.757 118.783 176.009 118.687 176.309 118.687C176.597 118.687 176.843 118.783 177.047 118.975C177.251 119.167 177.353 119.407 177.353 119.695C177.353 119.995 177.251 120.247 177.047 120.451C176.843 120.643 176.597 120.739 176.309 120.739ZM175.553 131.647V122.719H177.065V131.647H175.553ZM183.766 131.863C182.926 131.863 182.17 131.671 181.498 131.287C180.826 130.903 180.292 130.363 179.896 129.667C179.512 128.959 179.32 128.131 179.32 127.183C179.32 126.235 179.518 125.413 179.914 124.717C180.31 124.009 180.844 123.463 181.516 123.079C182.2 122.695 182.962 122.503 183.802 122.503C184.642 122.503 185.398 122.695 186.07 123.079C186.742 123.463 187.27 124.009 187.654 124.717C188.05 125.413 188.248 126.235 188.248 127.183C188.248 128.131 188.05 128.959 187.654 129.667C187.258 130.363 186.718 130.903 186.034 131.287C185.362 131.671 184.606 131.863 183.766 131.863ZM183.766 130.567C184.282 130.567 184.762 130.441 185.206 130.189C185.65 129.937 186.01 129.559 186.286 129.055C186.562 128.551 186.7 127.927 186.7 127.183C186.7 126.439 186.562 125.815 186.286 125.311C186.022 124.807 185.668 124.429 185.224 124.177C184.78 123.925 184.306 123.799 183.802 123.799C183.286 123.799 182.806 123.925 182.362 124.177C181.918 124.429 181.558 124.807 181.282 125.311C181.006 125.815 180.868 126.439 180.868 127.183C180.868 127.927 181.006 128.551 181.282 129.055C181.558 129.559 181.912 129.937 182.344 130.189C182.788 130.441 183.262 130.567 183.766 130.567ZM190.35 131.647V122.719H191.718L191.844 124.429C192.12 123.841 192.54 123.373 193.104 123.025C193.668 122.677 194.364 122.503 195.192 122.503V124.087H194.778C194.25 124.087 193.764 124.183 193.32 124.375C192.876 124.555 192.522 124.867 192.258 125.311C191.994 125.755 191.862 126.367 191.862 127.147V131.647H190.35ZM72.8476 171.647V150.647H80.6176C82.2976 150.647 83.6876 150.927 84.7876 151.487C85.8876 152.047 86.7076 152.817 87.2476 153.797C87.7876 154.777 88.0576 155.877 88.0576 157.097C88.0576 158.257 87.7976 159.327 87.2776 160.307C86.7576 161.267 85.9476 162.047 84.8476 162.647C83.7476 163.227 82.3376 163.517 80.6176 163.517H76.6876V171.647H72.8476ZM76.6876 160.397H80.3776C81.7176 160.397 82.6776 160.107 83.2576 159.527C83.8576 158.927 84.1576 158.117 84.1576 157.097C84.1576 156.057 83.8576 155.247 83.2576 154.667C82.6776 154.067 81.7176 153.767 80.3776 153.767H76.6876V160.397ZM90.9803 171.647V156.767H94.4003L94.7603 159.557C95.3003 158.597 96.0303 157.837 96.9503 157.277C97.8903 156.697 98.9903 156.407 100.25 156.407V160.457H99.1703C98.3303 160.457 97.5803 160.587 96.9203 160.847C96.2603 161.107 95.7403 161.557 95.3603 162.197C95.0003 162.837 94.8203 163.727 94.8203 164.867V171.647H90.9803ZM109.751 172.007C108.311 172.007 107.011 171.677 105.851 171.017C104.711 170.357 103.801 169.447 103.121 168.287C102.461 167.107 102.131 165.747 102.131 164.207C102.131 162.667 102.471 161.317 103.151 160.157C103.831 158.977 104.741 158.057 105.881 157.397C107.041 156.737 108.341 156.407 109.781 156.407C111.201 156.407 112.481 156.737 113.621 157.397C114.781 158.057 115.691 158.977 116.351 160.157C117.031 161.317 117.371 162.667 117.371 164.207C117.371 165.747 117.031 167.107 116.351 168.287C115.691 169.447 114.781 170.357 113.621 171.017C112.461 171.677 111.171 172.007 109.751 172.007ZM109.751 168.677C110.751 168.677 111.621 168.307 112.361 167.567C113.101 166.807 113.471 165.687 113.471 164.207C113.471 162.727 113.101 161.617 112.361 160.877C111.621 160.117 110.761 159.737 109.781 159.737C108.761 159.737 107.881 160.117 107.141 160.877C106.421 161.617 106.061 162.727 106.061 164.207C106.061 165.687 106.421 166.807 107.141 167.567C107.881 168.307 108.751 168.677 109.751 168.677ZM127.644 172.007C126.244 172.007 124.994 171.667 123.894 170.987C122.794 170.307 121.924 169.377 121.284 168.197C120.644 167.017 120.324 165.677 120.324 164.177C120.324 162.677 120.644 161.347 121.284 160.187C121.924 159.007 122.794 158.087 123.894 157.427C124.994 156.747 126.244 156.407 127.644 156.407C128.764 156.407 129.744 156.617 130.584 157.037C131.424 157.457 132.104 158.047 132.624 158.807V150.047H136.464V171.647H133.044L132.624 169.517C132.144 170.177 131.504 170.757 130.704 171.257C129.924 171.757 128.904 172.007 127.644 172.007ZM128.454 168.647C129.694 168.647 130.704 168.237 131.484 167.417C132.284 166.577 132.684 165.507 132.684 164.207C132.684 162.907 132.284 161.847 131.484 161.027C130.704 160.187 129.694 159.767 128.454 159.767C127.234 159.767 126.224 160.177 125.424 160.997C124.624 161.817 124.224 162.877 124.224 164.177C124.224 165.477 124.624 166.547 125.424 167.387C126.224 168.227 127.234 168.647 128.454 168.647ZM145.955 172.007C144.095 172.007 142.655 171.427 141.635 170.267C140.635 169.107 140.135 167.407 140.135 165.167V156.767H143.945V164.807C143.945 166.087 144.205 167.067 144.725 167.747C145.245 168.427 146.065 168.767 147.185 168.767C148.245 168.767 149.115 168.387 149.795 167.627C150.495 166.867 150.845 165.807 150.845 164.447V156.767H154.685V171.647H151.295L150.995 169.127C150.535 170.007 149.865 170.707 148.985 171.227C148.125 171.747 147.115 172.007 145.955 172.007ZM165.917 172.007C164.397 172.007 163.057 171.677 161.897 171.017C160.737 170.357 159.817 169.437 159.137 168.257C158.477 167.077 158.147 165.727 158.147 164.207C158.147 162.687 158.477 161.337 159.137 160.157C159.817 158.977 160.737 158.057 161.897 157.397C163.057 156.737 164.397 156.407 165.917 156.407C167.817 156.407 169.417 156.907 170.717 157.907C172.017 158.887 172.847 160.247 173.207 161.987H169.157C168.957 161.267 168.557 160.707 167.957 160.307C167.377 159.887 166.687 159.677 165.887 159.677C164.827 159.677 163.927 160.077 163.187 160.877C162.447 161.677 162.077 162.787 162.077 164.207C162.077 165.627 162.447 166.737 163.187 167.537C163.927 168.337 164.827 168.737 165.887 168.737C166.687 168.737 167.377 168.537 167.957 168.137C168.557 167.737 168.957 167.167 169.157 166.427H173.207C172.847 168.107 172.017 169.457 170.717 170.477C169.417 171.497 167.817 172.007 165.917 172.007ZM183.04 171.647C181.48 171.647 180.23 171.267 179.29 170.507C178.35 169.747 177.88 168.397 177.88 166.457V159.977H175.33V156.767H177.88L178.33 152.777H181.72V156.767H185.74V159.977H181.72V166.487C181.72 167.207 181.87 167.707 182.17 167.987C182.49 168.247 183.03 168.377 183.79 168.377H185.65V171.647H183.04ZM191.107 154.457C190.407 154.457 189.827 154.247 189.367 153.827C188.927 153.407 188.707 152.877 188.707 152.237C188.707 151.597 188.927 151.077 189.367 150.677C189.827 150.257 190.407 150.047 191.107 150.047C191.807 150.047 192.377 150.257 192.817 150.677C193.277 151.077 193.507 151.597 193.507 152.237C193.507 152.877 193.277 153.407 192.817 153.827C192.377 154.247 191.807 154.457 191.107 154.457ZM189.187 171.647V156.767H193.027V171.647H189.187ZM201.055 171.647L195.595 156.767H199.615L203.395 168.017L207.175 156.767H211.195L205.705 171.647H201.055ZM215.687 154.457C214.987 154.457 214.407 154.247 213.947 153.827C213.507 153.407 213.287 152.877 213.287 152.237C213.287 151.597 213.507 151.077 213.947 150.677C214.407 150.257 214.987 150.047 215.687 150.047C216.387 150.047 216.957 150.257 217.397 150.677C217.857 151.077 218.087 151.597 218.087 152.237C218.087 152.877 217.857 153.407 217.397 153.827C216.957 154.247 216.387 154.457 215.687 154.457ZM213.767 171.647V156.767H217.607V171.647H213.767ZM228.245 171.647C226.685 171.647 225.435 171.267 224.495 170.507C223.555 169.747 223.085 168.397 223.085 166.457V159.977H220.535V156.767H223.085L223.535 152.777H226.925V156.767H230.945V159.977H226.925V166.487C226.925 167.207 227.075 167.707 227.375 167.987C227.695 168.247 228.235 168.377 228.995 168.377H230.855V171.647H228.245ZM236.102 178.247L239.552 170.657H238.652L232.862 156.767H237.032L241.202 167.237L245.552 156.767H249.632L240.182 178.247H236.102Z"
                fill="#CB4A22"
              />
            </g>
            <defs>
              <clipPath id="clip0_548_22035">
                <rect
                  y="0.647461"
                  width="314"
                  height="312"
                  rx="156"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="281"
            height="281"
            viewBox="0 0 281 281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 md:-ml-12 -mt-24 md:mt-4"
          >
            <path
              d="M99.2041 125V112.4H100.716V125H99.2041ZM103.298 125V116.072H104.666L104.756 117.674C105.044 117.11 105.458 116.666 105.998 116.342C106.538 116.018 107.15 115.856 107.834 115.856C108.89 115.856 109.73 116.18 110.354 116.828C110.99 117.464 111.308 118.448 111.308 119.78V125H109.796V119.942C109.796 118.082 109.028 117.152 107.492 117.152C106.724 117.152 106.082 117.434 105.566 117.998C105.062 118.55 104.81 119.342 104.81 120.374V125H103.298ZM117.702 125.216C116.85 125.216 116.082 125.024 115.398 124.64C114.726 124.244 114.192 123.698 113.796 123.002C113.412 122.294 113.22 121.472 113.22 120.536C113.22 119.6 113.412 118.784 113.796 118.088C114.192 117.38 114.726 116.834 115.398 116.45C116.082 116.054 116.85 115.856 117.702 115.856C118.758 115.856 119.646 116.132 120.366 116.684C121.098 117.236 121.56 117.974 121.752 118.898H120.204C120.084 118.346 119.79 117.92 119.322 117.62C118.854 117.308 118.308 117.152 117.684 117.152C117.18 117.152 116.706 117.278 116.262 117.53C115.818 117.782 115.458 118.16 115.182 118.664C114.906 119.168 114.768 119.792 114.768 120.536C114.768 121.28 114.906 121.904 115.182 122.408C115.458 122.912 115.818 123.296 116.262 123.56C116.706 123.812 117.18 123.938 117.684 123.938C118.308 123.938 118.854 123.788 119.322 123.488C119.79 123.176 120.084 122.738 120.204 122.174H121.752C121.572 123.074 121.116 123.806 120.384 124.37C119.652 124.934 118.758 125.216 117.702 125.216ZM123.864 125V116.072H125.232L125.358 117.782C125.634 117.194 126.054 116.726 126.618 116.378C127.182 116.03 127.878 115.856 128.706 115.856V117.44H128.292C127.764 117.44 127.278 117.536 126.834 117.728C126.39 117.908 126.036 118.22 125.772 118.664C125.508 119.108 125.376 119.72 125.376 120.5V125H123.864ZM134.083 125.216C133.231 125.216 132.475 125.024 131.815 124.64C131.155 124.244 130.633 123.698 130.249 123.002C129.877 122.306 129.691 121.484 129.691 120.536C129.691 119.6 129.877 118.784 130.249 118.088C130.621 117.38 131.137 116.834 131.797 116.45C132.469 116.054 133.243 115.856 134.119 115.856C134.983 115.856 135.727 116.054 136.351 116.45C136.987 116.834 137.473 117.344 137.809 117.98C138.145 118.616 138.313 119.3 138.313 120.032C138.313 120.164 138.307 120.296 138.295 120.428C138.295 120.56 138.295 120.71 138.295 120.878H131.185C131.221 121.562 131.377 122.132 131.653 122.588C131.941 123.032 132.295 123.368 132.715 123.596C133.147 123.824 133.603 123.938 134.083 123.938C134.707 123.938 135.229 123.794 135.649 123.506C136.069 123.218 136.375 122.828 136.567 122.336H138.061C137.821 123.164 137.359 123.854 136.675 124.406C136.003 124.946 135.139 125.216 134.083 125.216ZM134.083 117.134C133.363 117.134 132.721 117.356 132.157 117.8C131.605 118.232 131.287 118.868 131.203 119.708H136.819C136.783 118.904 136.507 118.274 135.991 117.818C135.475 117.362 134.839 117.134 134.083 117.134ZM143.287 125.216C142.543 125.216 141.925 125.09 141.433 124.838C140.941 124.586 140.575 124.25 140.335 123.83C140.095 123.41 139.975 122.954 139.975 122.462C139.975 121.55 140.323 120.848 141.019 120.356C141.715 119.864 142.663 119.618 143.863 119.618H146.275V119.51C146.275 118.73 146.071 118.142 145.663 117.746C145.255 117.338 144.709 117.134 144.025 117.134C143.437 117.134 142.927 117.284 142.495 117.584C142.075 117.872 141.811 118.298 141.703 118.862H140.155C140.215 118.214 140.431 117.668 140.803 117.224C141.187 116.78 141.661 116.444 142.225 116.216C142.789 115.976 143.389 115.856 144.025 115.856C145.273 115.856 146.209 116.192 146.833 116.864C147.469 117.524 147.787 118.406 147.787 119.51V125H146.437L146.347 123.398C146.095 123.902 145.723 124.334 145.231 124.694C144.751 125.042 144.103 125.216 143.287 125.216ZM143.521 123.938C144.097 123.938 144.589 123.788 144.997 123.488C145.417 123.188 145.735 122.798 145.951 122.318C146.167 121.838 146.275 121.334 146.275 120.806V120.788H143.989C143.101 120.788 142.471 120.944 142.099 121.256C141.739 121.556 141.559 121.934 141.559 122.39C141.559 122.858 141.727 123.236 142.063 123.524C142.411 123.8 142.897 123.938 143.521 123.938ZM153.475 125.216C152.407 125.216 151.519 124.946 150.811 124.406C150.103 123.866 149.689 123.134 149.569 122.21H151.117C151.213 122.678 151.459 123.086 151.855 123.434C152.263 123.77 152.809 123.938 153.493 123.938C154.129 123.938 154.597 123.806 154.897 123.542C155.197 123.266 155.347 122.942 155.347 122.57C155.347 122.03 155.149 121.67 154.753 121.49C154.369 121.31 153.823 121.148 153.115 121.004C152.635 120.908 152.155 120.77 151.675 120.59C151.195 120.41 150.793 120.158 150.469 119.834C150.145 119.498 149.983 119.06 149.983 118.52C149.983 117.74 150.271 117.104 150.847 116.612C151.435 116.108 152.227 115.856 153.223 115.856C154.171 115.856 154.945 116.096 155.545 116.576C156.157 117.044 156.511 117.716 156.607 118.592H155.113C155.053 118.136 154.855 117.782 154.519 117.53C154.195 117.266 153.757 117.134 153.205 117.134C152.665 117.134 152.245 117.248 151.945 117.476C151.657 117.704 151.513 118.004 151.513 118.376C151.513 118.736 151.699 119.018 152.071 119.222C152.455 119.426 152.971 119.6 153.619 119.744C154.171 119.864 154.693 120.014 155.185 120.194C155.689 120.362 156.097 120.62 156.409 120.968C156.733 121.304 156.895 121.796 156.895 122.444C156.907 123.248 156.601 123.914 155.977 124.442C155.365 124.958 154.531 125.216 153.475 125.216ZM163.069 125.216C162.217 125.216 161.461 125.024 160.801 124.64C160.141 124.244 159.619 123.698 159.235 123.002C158.863 122.306 158.677 121.484 158.677 120.536C158.677 119.6 158.863 118.784 159.235 118.088C159.607 117.38 160.123 116.834 160.783 116.45C161.455 116.054 162.229 115.856 163.105 115.856C163.969 115.856 164.713 116.054 165.337 116.45C165.973 116.834 166.459 117.344 166.795 117.98C167.131 118.616 167.299 119.3 167.299 120.032C167.299 120.164 167.293 120.296 167.281 120.428C167.281 120.56 167.281 120.71 167.281 120.878H160.171C160.207 121.562 160.363 122.132 160.639 122.588C160.927 123.032 161.281 123.368 161.701 123.596C162.133 123.824 162.589 123.938 163.069 123.938C163.693 123.938 164.215 123.794 164.635 123.506C165.055 123.218 165.361 122.828 165.553 122.336H167.047C166.807 123.164 166.345 123.854 165.661 124.406C164.989 124.946 164.125 125.216 163.069 125.216ZM163.069 117.134C162.349 117.134 161.707 117.356 161.143 117.8C160.591 118.232 160.273 118.868 160.189 119.708H165.805C165.769 118.904 165.493 118.274 164.977 117.818C164.461 117.362 163.825 117.134 163.069 117.134ZM173.354 125.216C172.466 125.216 171.686 125.012 171.014 124.604C170.354 124.196 169.838 123.638 169.466 122.93C169.106 122.222 168.926 121.418 168.926 120.518C168.926 119.618 169.112 118.82 169.484 118.124C169.856 117.416 170.372 116.864 171.032 116.468C171.692 116.06 172.472 115.856 173.372 115.856C174.104 115.856 174.752 116.006 175.316 116.306C175.88 116.606 176.318 117.026 176.63 117.566V112.04H178.142V125H176.774L176.63 123.524C176.342 123.956 175.928 124.346 175.388 124.694C174.848 125.042 174.17 125.216 173.354 125.216ZM173.516 123.902C174.116 123.902 174.644 123.764 175.1 123.488C175.568 123.2 175.928 122.804 176.18 122.3C176.444 121.796 176.576 121.208 176.576 120.536C176.576 119.864 176.444 119.276 176.18 118.772C175.928 118.268 175.568 117.878 175.1 117.602C174.644 117.314 174.116 117.17 173.516 117.17C172.928 117.17 172.4 117.314 171.932 117.602C171.476 117.878 171.116 118.268 170.852 118.772C170.6 119.276 170.474 119.864 170.474 120.536C170.474 121.208 170.6 121.796 170.852 122.3C171.116 122.804 171.476 123.2 171.932 123.488C172.4 123.764 172.928 123.902 173.516 123.902ZM110.767 165V147.09H104.647V144H120.757V147.09H114.607V165H110.767ZM122.047 165V150.12H125.467L125.827 152.91C126.367 151.95 127.097 151.19 128.017 150.63C128.957 150.05 130.057 149.76 131.317 149.76V153.81H130.237C129.397 153.81 128.647 153.94 127.987 154.2C127.327 154.46 126.807 154.91 126.427 155.55C126.067 156.19 125.887 157.08 125.887 158.22V165H122.047ZM139.521 165.36C137.661 165.36 136.221 164.78 135.201 163.62C134.201 162.46 133.701 160.76 133.701 158.52V150.12H137.511V158.16C137.511 159.44 137.771 160.42 138.291 161.1C138.811 161.78 139.631 162.12 140.751 162.12C141.811 162.12 142.681 161.74 143.361 160.98C144.061 160.22 144.411 159.16 144.411 157.8V150.12H148.251V165H144.861L144.561 162.48C144.101 163.36 143.431 164.06 142.551 164.58C141.691 165.1 140.681 165.36 139.521 165.36ZM158.343 165.36C157.023 165.36 155.863 165.15 154.863 164.73C153.863 164.29 153.063 163.69 152.463 162.93C151.863 162.17 151.503 161.29 151.383 160.29H155.253C155.373 160.87 155.693 161.37 156.213 161.79C156.753 162.19 157.443 162.39 158.283 162.39C159.123 162.39 159.733 162.22 160.113 161.88C160.513 161.54 160.713 161.15 160.713 160.71C160.713 160.07 160.433 159.64 159.873 159.42C159.313 159.18 158.533 158.95 157.533 158.73C156.893 158.59 156.243 158.42 155.583 158.22C154.923 158.02 154.313 157.77 153.753 157.47C153.213 157.15 152.773 156.75 152.433 156.27C152.093 155.77 151.923 155.16 151.923 154.44C151.923 153.12 152.443 152.01 153.483 151.11C154.543 150.21 156.023 149.76 157.923 149.76C159.683 149.76 161.083 150.17 162.123 150.99C163.183 151.81 163.813 152.94 164.013 154.38H160.383C160.163 153.28 159.333 152.73 157.893 152.73C157.173 152.73 156.613 152.87 156.213 153.15C155.833 153.43 155.643 153.78 155.643 154.2C155.643 154.64 155.933 154.99 156.513 155.25C157.093 155.51 157.863 155.75 158.823 155.97C159.863 156.21 160.813 156.48 161.673 156.78C162.553 157.06 163.253 157.49 163.773 158.07C164.293 158.63 164.553 159.44 164.553 160.5C164.573 161.42 164.333 162.25 163.833 162.99C163.333 163.73 162.613 164.31 161.673 164.73C160.733 165.15 159.623 165.36 158.343 165.36ZM174.116 165C172.556 165 171.306 164.62 170.366 163.86C169.426 163.1 168.956 161.75 168.956 159.81V153.33H166.406V150.12H168.956L169.406 146.13H172.796V150.12H176.816V153.33H172.796V159.84C172.796 160.56 172.946 161.06 173.246 161.34C173.566 161.6 174.106 161.73 174.866 161.73H176.726V165H174.116Z"
              fill="#CB4A22"
            />
            <path
              d="M280.4 140.501C280.4 217.766 217.765 280.402 140.5 280.402C63.2352 280.402 0.599744 217.766 0.599744 140.501C0.599744 63.2357 63.2352 0.599744 140.5 0.599744C217.765 0.599744 280.4 63.2357 280.4 140.501Z"
              stroke="#CB4A22"
              stroke-width="1.19949"
            />
          </svg>
          <svg
            width="315"
            height="315"
            viewBox="0 0 315 315"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-mt-24 lg:mt-0 lg:-ml-32"
          >
            <path
              d="M116.048 141.918C115.124 141.918 114.32 141.75 113.636 141.414C112.952 141.078 112.424 140.61 112.052 140.01C111.68 139.41 111.494 138.714 111.494 137.922H113.078C113.078 138.414 113.192 138.87 113.42 139.29C113.648 139.698 113.978 140.028 114.41 140.28C114.854 140.52 115.4 140.64 116.048 140.64C116.9 140.64 117.56 140.436 118.028 140.028C118.496 139.62 118.73 139.11 118.73 138.498C118.73 137.994 118.622 137.592 118.406 137.292C118.19 136.98 117.896 136.728 117.524 136.536C117.164 136.344 116.744 136.176 116.264 136.032C115.796 135.888 115.304 135.726 114.788 135.546C113.816 135.21 113.096 134.796 112.628 134.304C112.16 133.8 111.926 133.146 111.926 132.342C111.914 131.67 112.07 131.076 112.394 130.56C112.718 130.032 113.174 129.624 113.762 129.336C114.362 129.036 115.07 128.886 115.886 128.886C116.69 128.886 117.386 129.036 117.974 129.336C118.574 129.636 119.036 130.05 119.36 130.578C119.696 131.106 119.87 131.706 119.882 132.378H118.298C118.298 132.03 118.208 131.688 118.028 131.352C117.848 131.004 117.572 130.722 117.2 130.506C116.84 130.29 116.384 130.182 115.832 130.182C115.148 130.17 114.584 130.344 114.14 130.704C113.708 131.064 113.492 131.562 113.492 132.198C113.492 132.738 113.642 133.152 113.942 133.44C114.254 133.728 114.686 133.968 115.238 134.16C115.79 134.34 116.426 134.55 117.146 134.79C117.746 135.006 118.286 135.258 118.766 135.546C119.246 135.834 119.618 136.206 119.882 136.662C120.158 137.118 120.296 137.7 120.296 138.408C120.296 139.008 120.14 139.578 119.828 140.118C119.516 140.646 119.042 141.078 118.406 141.414C117.782 141.75 116.996 141.918 116.048 141.918ZM125.609 141.918C124.553 141.918 123.713 141.6 123.089 140.964C122.465 140.316 122.153 139.326 122.153 137.994V132.774H123.665V137.832C123.665 139.692 124.427 140.622 125.951 140.622C126.731 140.622 127.373 140.346 127.877 139.794C128.393 139.23 128.651 138.432 128.651 137.4V132.774H130.163V141.702H128.795L128.687 140.1C128.411 140.664 127.997 141.108 127.445 141.432C126.905 141.756 126.293 141.918 125.609 141.918ZM136.071 141.918C135.003 141.918 134.115 141.648 133.407 141.108C132.699 140.568 132.285 139.836 132.165 138.912H133.713C133.809 139.38 134.055 139.788 134.451 140.136C134.859 140.472 135.405 140.64 136.089 140.64C136.725 140.64 137.193 140.508 137.493 140.244C137.793 139.968 137.943 139.644 137.943 139.272C137.943 138.732 137.745 138.372 137.349 138.192C136.965 138.012 136.419 137.85 135.711 137.706C135.231 137.61 134.751 137.472 134.271 137.292C133.791 137.112 133.389 136.86 133.065 136.536C132.741 136.2 132.579 135.762 132.579 135.222C132.579 134.442 132.867 133.806 133.443 133.314C134.031 132.81 134.823 132.558 135.819 132.558C136.767 132.558 137.541 132.798 138.141 133.278C138.753 133.746 139.107 134.418 139.203 135.294H137.709C137.649 134.838 137.451 134.484 137.115 134.232C136.791 133.968 136.353 133.836 135.801 133.836C135.261 133.836 134.841 133.95 134.541 134.178C134.253 134.406 134.109 134.706 134.109 135.078C134.109 135.438 134.295 135.72 134.667 135.924C135.051 136.128 135.567 136.302 136.215 136.446C136.767 136.566 137.289 136.716 137.781 136.896C138.285 137.064 138.693 137.322 139.005 137.67C139.329 138.006 139.491 138.498 139.491 139.146C139.503 139.95 139.197 140.616 138.573 141.144C137.961 141.66 137.127 141.918 136.071 141.918ZM144.775 141.702C143.959 141.702 143.317 141.504 142.849 141.108C142.381 140.712 142.147 139.998 142.147 138.966V134.052H140.599V132.774H142.147L142.345 130.632H143.659V132.774H146.287V134.052H143.659V138.966C143.659 139.53 143.773 139.914 144.001 140.118C144.229 140.31 144.631 140.406 145.207 140.406H146.143V141.702H144.775ZM151.178 141.918C150.434 141.918 149.816 141.792 149.324 141.54C148.832 141.288 148.466 140.952 148.226 140.532C147.986 140.112 147.866 139.656 147.866 139.164C147.866 138.252 148.214 137.55 148.91 137.058C149.606 136.566 150.554 136.32 151.754 136.32H154.166V136.212C154.166 135.432 153.962 134.844 153.554 134.448C153.146 134.04 152.6 133.836 151.916 133.836C151.328 133.836 150.818 133.986 150.386 134.286C149.966 134.574 149.702 135 149.594 135.564H148.046C148.106 134.916 148.322 134.37 148.694 133.926C149.078 133.482 149.552 133.146 150.116 132.918C150.68 132.678 151.28 132.558 151.916 132.558C153.164 132.558 154.1 132.894 154.724 133.566C155.36 134.226 155.678 135.108 155.678 136.212V141.702H154.328L154.238 140.1C153.986 140.604 153.614 141.036 153.122 141.396C152.642 141.744 151.994 141.918 151.178 141.918ZM151.412 140.64C151.988 140.64 152.48 140.49 152.888 140.19C153.308 139.89 153.626 139.5 153.842 139.02C154.058 138.54 154.166 138.036 154.166 137.508V137.49H151.88C150.992 137.49 150.362 137.646 149.99 137.958C149.63 138.258 149.45 138.636 149.45 139.092C149.45 139.56 149.618 139.938 149.954 140.226C150.302 140.502 150.788 140.64 151.412 140.64ZM158.864 130.794C158.564 130.794 158.312 130.698 158.108 130.506C157.916 130.302 157.82 130.05 157.82 129.75C157.82 129.462 157.916 129.222 158.108 129.03C158.312 128.838 158.564 128.742 158.864 128.742C159.152 128.742 159.398 128.838 159.602 129.03C159.806 129.222 159.908 129.462 159.908 129.75C159.908 130.05 159.806 130.302 159.602 130.506C159.398 130.698 159.152 130.794 158.864 130.794ZM158.108 141.702V132.774H159.62V141.702H158.108ZM162.253 141.702V132.774H163.621L163.711 134.376C163.999 133.812 164.413 133.368 164.953 133.044C165.493 132.72 166.105 132.558 166.789 132.558C167.845 132.558 168.685 132.882 169.309 133.53C169.945 134.166 170.263 135.15 170.263 136.482V141.702H168.751V136.644C168.751 134.784 167.983 133.854 166.447 133.854C165.679 133.854 165.037 134.136 164.521 134.7C164.017 135.252 163.765 136.044 163.765 137.076V141.702H162.253ZM175.524 141.918C174.78 141.918 174.162 141.792 173.67 141.54C173.178 141.288 172.812 140.952 172.572 140.532C172.332 140.112 172.212 139.656 172.212 139.164C172.212 138.252 172.56 137.55 173.256 137.058C173.952 136.566 174.9 136.32 176.1 136.32H178.512V136.212C178.512 135.432 178.308 134.844 177.9 134.448C177.492 134.04 176.946 133.836 176.262 133.836C175.674 133.836 175.164 133.986 174.732 134.286C174.312 134.574 174.048 135 173.94 135.564H172.392C172.452 134.916 172.668 134.37 173.04 133.926C173.424 133.482 173.898 133.146 174.462 132.918C175.026 132.678 175.626 132.558 176.262 132.558C177.51 132.558 178.446 132.894 179.07 133.566C179.706 134.226 180.024 135.108 180.024 136.212V141.702H178.674L178.584 140.1C178.332 140.604 177.96 141.036 177.468 141.396C176.988 141.744 176.34 141.918 175.524 141.918ZM175.758 140.64C176.334 140.64 176.826 140.49 177.234 140.19C177.654 139.89 177.972 139.5 178.188 139.02C178.404 138.54 178.512 138.036 178.512 137.508V137.49H176.226C175.338 137.49 174.708 137.646 174.336 137.958C173.976 138.258 173.796 138.636 173.796 139.092C173.796 139.56 173.964 139.938 174.3 140.226C174.648 140.502 175.134 140.64 175.758 140.64ZM187.062 141.918C186.33 141.918 185.676 141.768 185.1 141.468C184.536 141.168 184.104 140.748 183.804 140.208L183.66 141.702H182.292V128.742H183.804V134.25C184.092 133.818 184.5 133.428 185.028 133.08C185.568 132.732 186.252 132.558 187.08 132.558C187.968 132.558 188.742 132.762 189.402 133.17C190.062 133.578 190.572 134.136 190.932 134.844C191.304 135.552 191.49 136.356 191.49 137.256C191.49 138.156 191.304 138.96 190.932 139.668C190.572 140.364 190.056 140.916 189.384 141.324C188.724 141.72 187.95 141.918 187.062 141.918ZM186.9 140.604C187.5 140.604 188.028 140.466 188.484 140.19C188.94 139.902 189.3 139.506 189.564 139.002C189.828 138.498 189.96 137.91 189.96 137.238C189.96 136.566 189.828 135.978 189.564 135.474C189.3 134.97 188.94 134.58 188.484 134.304C188.028 134.016 187.5 133.872 186.9 133.872C186.3 133.872 185.772 134.016 185.316 134.304C184.86 134.58 184.5 134.97 184.236 135.474C183.972 135.978 183.84 136.566 183.84 137.238C183.84 137.91 183.972 138.498 184.236 139.002C184.5 139.506 184.86 139.902 185.316 140.19C185.772 140.466 186.3 140.604 186.9 140.604ZM193.595 141.702V128.742H195.107V141.702H193.595ZM201.599 141.918C200.747 141.918 199.991 141.726 199.331 141.342C198.671 140.946 198.149 140.4 197.765 139.704C197.393 139.008 197.207 138.186 197.207 137.238C197.207 136.302 197.393 135.486 197.765 134.79C198.137 134.082 198.653 133.536 199.313 133.152C199.985 132.756 200.759 132.558 201.635 132.558C202.499 132.558 203.243 132.756 203.867 133.152C204.503 133.536 204.989 134.046 205.325 134.682C205.661 135.318 205.829 136.002 205.829 136.734C205.829 136.866 205.823 136.998 205.811 137.13C205.811 137.262 205.811 137.412 205.811 137.58H198.701C198.737 138.264 198.893 138.834 199.169 139.29C199.457 139.734 199.811 140.07 200.231 140.298C200.663 140.526 201.119 140.64 201.599 140.64C202.223 140.64 202.745 140.496 203.165 140.208C203.585 139.92 203.891 139.53 204.083 139.038H205.577C205.337 139.866 204.875 140.556 204.191 141.108C203.519 141.648 202.655 141.918 201.599 141.918ZM201.599 133.836C200.879 133.836 200.237 134.058 199.673 134.502C199.121 134.934 198.803 135.57 198.719 136.41H204.335C204.299 135.606 204.023 134.976 203.507 134.52C202.991 134.064 202.355 133.836 201.599 133.836ZM76.1863 181.702L83.8663 160.702H88.1863L95.8663 181.702H91.7863L90.1063 176.842H81.9163L80.2063 181.702H76.1863ZM82.9663 173.842H89.0563L85.9963 165.112L82.9663 173.842ZM104.618 182.062C103.218 182.062 101.968 181.722 100.868 181.042C99.7683 180.362 98.8983 179.432 98.2583 178.252C97.6183 177.072 97.2983 175.732 97.2983 174.232C97.2983 172.732 97.6183 171.402 98.2583 170.242C98.8983 169.062 99.7683 168.142 100.868 167.482C101.968 166.802 103.218 166.462 104.618 166.462C105.738 166.462 106.718 166.672 107.558 167.092C108.398 167.512 109.078 168.102 109.598 168.862V160.102H113.438V181.702H110.018L109.598 179.572C109.118 180.232 108.478 180.812 107.678 181.312C106.898 181.812 105.878 182.062 104.618 182.062ZM105.428 178.702C106.668 178.702 107.678 178.292 108.458 177.472C109.258 176.632 109.658 175.562 109.658 174.262C109.658 172.962 109.258 171.902 108.458 171.082C107.678 170.242 106.668 169.822 105.428 169.822C104.208 169.822 103.198 170.232 102.398 171.052C101.598 171.872 101.198 172.932 101.198 174.232C101.198 175.532 101.598 176.602 102.398 177.442C103.198 178.282 104.208 178.702 105.428 178.702ZM121.369 181.702L115.909 166.822H119.929L123.709 178.072L127.489 166.822H131.509L126.019 181.702H121.369ZM138.152 182.062C136.872 182.062 135.822 181.862 135.002 181.462C134.182 181.042 133.572 180.492 133.172 179.812C132.772 179.132 132.572 178.382 132.572 177.562C132.572 176.182 133.112 175.062 134.192 174.202C135.272 173.342 136.892 172.912 139.052 172.912H142.832V172.552C142.832 171.532 142.542 170.782 141.962 170.302C141.382 169.822 140.662 169.582 139.802 169.582C139.022 169.582 138.342 169.772 137.762 170.152C137.182 170.512 136.822 171.052 136.682 171.772H132.932C133.032 170.692 133.392 169.752 134.012 168.952C134.652 168.152 135.472 167.542 136.472 167.122C137.472 166.682 138.592 166.462 139.832 166.462C141.952 166.462 143.622 166.992 144.842 168.052C146.062 169.112 146.672 170.612 146.672 172.552V181.702H143.402L143.042 179.302C142.602 180.102 141.982 180.762 141.182 181.282C140.402 181.802 139.392 182.062 138.152 182.062ZM139.022 179.062C140.122 179.062 140.972 178.702 141.572 177.982C142.192 177.262 142.582 176.372 142.742 175.312H139.472C138.452 175.312 137.722 175.502 137.282 175.882C136.842 176.242 136.622 176.692 136.622 177.232C136.622 177.812 136.842 178.262 137.282 178.582C137.722 178.902 138.302 179.062 139.022 179.062ZM150.337 181.702V166.822H153.727L154.027 169.342C154.487 168.462 155.147 167.762 156.007 167.242C156.887 166.722 157.917 166.462 159.097 166.462C160.937 166.462 162.367 167.042 163.387 168.202C164.407 169.362 164.917 171.062 164.917 173.302V181.702H161.077V173.662C161.077 172.382 160.817 171.402 160.297 170.722C159.777 170.042 158.967 169.702 157.867 169.702C156.787 169.702 155.897 170.082 155.197 170.842C154.517 171.602 154.177 172.662 154.177 174.022V181.702H150.337ZM175.219 181.702C173.659 181.702 172.409 181.322 171.469 180.562C170.529 179.802 170.059 178.452 170.059 176.512V170.032H167.509V166.822H170.059L170.509 162.832H173.899V166.822H177.919V170.032H173.899V176.542C173.899 177.262 174.049 177.762 174.349 178.042C174.669 178.302 175.209 178.432 175.969 178.432H177.829V181.702H175.219ZM186.346 182.062C185.066 182.062 184.016 181.862 183.196 181.462C182.376 181.042 181.766 180.492 181.366 179.812C180.966 179.132 180.766 178.382 180.766 177.562C180.766 176.182 181.306 175.062 182.386 174.202C183.466 173.342 185.086 172.912 187.246 172.912H191.026V172.552C191.026 171.532 190.736 170.782 190.156 170.302C189.576 169.822 188.856 169.582 187.996 169.582C187.216 169.582 186.536 169.772 185.956 170.152C185.376 170.512 185.016 171.052 184.876 171.772H181.126C181.226 170.692 181.586 169.752 182.206 168.952C182.846 168.152 183.666 167.542 184.666 167.122C185.666 166.682 186.786 166.462 188.026 166.462C190.146 166.462 191.816 166.992 193.036 168.052C194.256 169.112 194.866 170.612 194.866 172.552V181.702H191.596L191.236 179.302C190.796 180.102 190.176 180.762 189.376 181.282C188.596 181.802 187.586 182.062 186.346 182.062ZM187.216 179.062C188.316 179.062 189.166 178.702 189.766 177.982C190.386 177.262 190.776 176.372 190.936 175.312H187.666C186.646 175.312 185.916 175.502 185.476 175.882C185.036 176.242 184.816 176.692 184.816 177.232C184.816 177.812 185.036 178.262 185.476 178.582C185.916 178.902 186.496 179.062 187.216 179.062ZM204.83 177.262C204.11 177.262 203.44 177.182 202.82 177.022L201.71 178.132C202.05 178.312 202.51 178.462 203.09 178.582C203.67 178.702 204.61 178.822 205.91 178.942C207.89 179.122 209.33 179.592 210.23 180.352C211.13 181.112 211.58 182.162 211.58 183.502C211.58 184.382 211.34 185.212 210.86 185.992C210.38 186.792 209.64 187.432 208.64 187.912C207.64 188.412 206.36 188.662 204.8 188.662C202.68 188.662 200.97 188.262 199.67 187.462C198.37 186.682 197.72 185.502 197.72 183.922C197.72 182.582 198.37 181.422 199.67 180.442C199.27 180.262 198.92 180.072 198.62 179.872C198.34 179.672 198.09 179.462 197.87 179.242V178.552L200.48 175.792C199.32 174.772 198.74 173.462 198.74 171.862C198.74 170.862 198.98 169.952 199.46 169.132C199.96 168.312 200.66 167.662 201.56 167.182C202.46 166.702 203.55 166.462 204.83 166.462C205.67 166.462 206.45 166.582 207.17 166.822H212.81V169.162L210.26 169.342C210.66 170.102 210.86 170.942 210.86 171.862C210.86 172.862 210.62 173.772 210.14 174.592C209.66 175.412 208.96 176.062 208.04 176.542C207.14 177.022 206.07 177.262 204.83 177.262ZM204.83 174.322C205.61 174.322 206.25 174.112 206.75 173.692C207.27 173.272 207.53 172.672 207.53 171.892C207.53 171.112 207.27 170.512 206.75 170.092C206.25 169.672 205.61 169.462 204.83 169.462C204.01 169.462 203.35 169.672 202.85 170.092C202.35 170.512 202.1 171.112 202.1 171.892C202.1 172.672 202.35 173.272 202.85 173.692C203.35 174.112 204.01 174.322 204.83 174.322ZM201.23 183.532C201.23 184.272 201.57 184.822 202.25 185.182C202.95 185.562 203.8 185.752 204.8 185.752C205.76 185.752 206.54 185.552 207.14 185.152C207.74 184.772 208.04 184.252 208.04 183.592C208.04 183.052 207.84 182.602 207.44 182.242C207.06 181.882 206.29 181.662 205.13 181.582C204.31 181.522 203.55 181.432 202.85 181.312C202.27 181.632 201.85 181.982 201.59 182.362C201.35 182.742 201.23 183.132 201.23 183.532ZM222.254 182.062C220.754 182.062 219.424 181.742 218.264 181.102C217.104 180.462 216.194 179.562 215.534 178.402C214.874 177.242 214.544 175.902 214.544 174.382C214.544 172.842 214.864 171.472 215.504 170.272C216.164 169.072 217.064 168.142 218.204 167.482C219.364 166.802 220.724 166.462 222.284 166.462C223.744 166.462 225.034 166.782 226.154 167.422C227.274 168.062 228.144 168.942 228.764 170.062C229.404 171.162 229.724 172.392 229.724 173.752C229.724 173.972 229.714 174.202 229.694 174.442C229.694 174.682 229.684 174.932 229.664 175.192H218.354C218.434 176.352 218.834 177.262 219.554 177.922C220.294 178.582 221.184 178.912 222.224 178.912C223.004 178.912 223.654 178.742 224.174 178.402C224.714 178.042 225.114 177.582 225.374 177.022H229.274C228.994 177.962 228.524 178.822 227.864 179.602C227.224 180.362 226.424 180.962 225.464 181.402C224.524 181.842 223.454 182.062 222.254 182.062ZM222.284 169.582C221.344 169.582 220.514 169.852 219.794 170.392C219.074 170.912 218.614 171.712 218.414 172.792H225.824C225.764 171.812 225.404 171.032 224.744 170.452C224.084 169.872 223.264 169.582 222.284 169.582Z"
              fill="#CB4A22"
            />
            <rect
              x="0.880991"
              width="220.995"
              height="220.995"
              transform="matrix(0.707104 -0.70711 0.707104 0.70711 0.763898 157.819)"
              stroke="#CB4A22"
              stroke-width="1.24591"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
