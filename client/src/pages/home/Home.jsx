import React from "react";
import AppButton100 from "../../components/reuseable/AppButtons";
import tom from "../../assets/tom.png";
import harvard from "../../assets/harvard.png";
import MIT from "../../assets/MIT.png";
import Wiley from "../../assets/Wiley.png";
import speech from "../../assets/speech.jpeg";
import image20 from "../../assets/logos/image 20.png";
import image23 from "../../assets/logos/image 23.png";
import image24 from "../../assets/logos/image 24.png";
import image25 from "../../assets/logos/image 25.png";
import image26 from "../../assets/logos/image 26.png";
import image27 from "../../assets/logos/image 27.png";
import image28 from "../../assets/logos/image 28.png";
import image29 from "../../assets/logos/image 29.png";
import image30 from "../../assets/logos/image 30.png";
import image31 from "../../assets/logos/image 31.png";
import image32 from "../../assets/logos/image 32.png";
import image33 from "../../assets/logos/image 33.png";
import eclipse from "../../assets/Group 59.png";
import AffiliateForm from "../../components/AffiliateForm";
import sharperRed from "../../assets/sharper red.png";
import ArticlesList from "../../components/ArticlesList";
import SubscriberForm from "../../components/SubscriberForm";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-Greyscale mx-auto grid lg:overflow-y-hidden">
      <section className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12">
        <p className="font-medium text-[44px] md:text-[56px] lg:text-[74px]">
          What do world-class managers and teams do{" "}
          <span className="bg-[#d7d7d7] px-2">differently</span>?
        </p>
        <div className="grid gap-5 md:grid-cols-[1fr,1fr] md:w-[min(750px,100%)] md:gap-[20px_40px] lg:grid-cols-[1fr,1fr,1fr,1fr] lg:justify-items-center lg:w-[unset] lg:gap-4">
          <div
            className="w-full h-[444px] bg-Red500 rounded-[40px] relative grid cursor-pointer"
            onClick={() => navigate("concepts")}
          >
            <div className="w-[60px] h-[60px] bg-Greyscale absolute -top-1 -right-[0.03rem] rounded-bl-[40px]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0"
              >
                <rect width="48" height="48" rx="24" fill="#CB4A22" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.5858 25.0001H15V23.0001H29.5858L23.2929 16.7072L24.7071 15.293L33.4142 24.0001L24.7071 32.7072L23.2929 31.293L29.5858 25.0001Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="grid content-between p-[25px]">
              <p className="text-[30px] w-4/5 font-semibold text-Greyscale leading-tight">
                Mindset & Culture
              </p>
              <svg
                width="241"
                height="262"
                viewBox="0 0 241 262"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="justify-self-center"
              >
                <rect
                  width="236"
                  height="236"
                  transform="translate(4.5 16)"
                  fill="#CB4A22"
                />
                <g filter="url(#filter0_di_1361_13863)">
                  <path
                    d="M107.174 32L182.237 75.3372L182.237 162.012L107.174 205.349L32.1122 162.012L32.1122 75.3372L107.174 32Z"
                    fill="#9D391A"
                  />
                </g>
                <g filter="url(#filter1_b_1361_13863)">
                  <path
                    d="M132.543 61.4445L172.624 32.1102L218.068 52.1536L223.432 101.531L183.352 130.866L137.908 110.822L132.543 61.4445Z"
                    fill="url(#paint0_radial_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M132.543 61.4445L172.624 32.1102L218.068 52.1536L223.432 101.531L183.352 130.866L137.908 110.822L132.543 61.4445Z"
                    fill="url(#paint1_linear_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M138.094 110.686L132.755 61.5377L172.649 32.3398L217.882 52.2899L223.221 101.438L183.327 130.636L138.094 110.686Z"
                    stroke="url(#paint2_linear_1361_13863)"
                    stroke-width="0.4"
                  />
                </g>
                <g filter="url(#filter2_b_1361_13863)">
                  <path
                    d="M124.207 181.879L157.615 157.428L195.494 174.135L199.965 215.293L166.557 239.744L128.678 223.037L124.207 181.879Z"
                    fill="url(#paint3_radial_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M124.207 181.879L157.615 157.428L195.494 174.135L199.965 215.293L166.557 239.744L128.678 223.037L124.207 181.879Z"
                    fill="url(#paint4_linear_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M128.864 222.901L124.418 181.972L157.64 157.658L195.308 174.271L199.754 215.2L166.532 239.514L128.864 222.901Z"
                    stroke="url(#paint5_linear_1361_13863)"
                    stroke-width="0.4"
                  />
                </g>
                <g filter="url(#filter3_b_1361_13863)">
                  <path
                    d="M31.6976 172.388L54.0892 156L79.4776 167.198L82.4744 194.784L60.0828 211.172L34.6944 199.974L31.6976 172.388Z"
                    fill="url(#paint6_radial_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M31.6976 172.388L54.0892 156L79.4776 167.198L82.4744 194.784L60.0828 211.172L34.6944 199.974L31.6976 172.388Z"
                    fill="url(#paint7_linear_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M34.8808 199.838L31.9089 172.482L54.1142 156.23L79.2913 167.334L82.2631 194.69L60.0578 210.942L34.8808 199.838Z"
                    stroke="url(#paint8_linear_1361_13863)"
                    stroke-width="0.4"
                  />
                </g>
                <g filter="url(#filter4_b_1361_13863)">
                  <path
                    d="M61.6814 78.015L74.0421 68.9683L88.0571 75.1497L89.7114 90.3777L77.3507 99.4244L63.3357 93.2431L61.6814 78.015Z"
                    fill="url(#paint9_radial_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M61.6814 78.015L74.0421 68.9683L88.0571 75.1497L89.7114 90.3777L77.3507 99.4244L63.3357 93.2431L61.6814 78.015Z"
                    fill="url(#paint10_linear_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M63.4385 93.1678L61.798 78.0664L74.0559 69.0951L87.9542 75.225L89.5948 90.3263L77.3369 99.2977L63.4385 93.1678Z"
                    stroke="url(#paint11_linear_1361_13863)"
                    stroke-width="0.22081"
                  />
                </g>
                <g filter="url(#filter5_b_1361_13863)">
                  <path
                    d="M79.8105 123.377L100.428 108.287L123.805 118.598L126.565 143.998L105.947 159.088L82.5699 148.777L79.8105 123.377Z"
                    fill="url(#paint12_radial_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M79.8105 123.377L100.428 108.287L123.805 118.598L126.565 143.998L105.947 159.088L82.5699 148.777L79.8105 123.377Z"
                    fill="url(#paint13_linear_1361_13863)"
                    fill-opacity="0.6"
                  />
                  <path
                    d="M82.7415 148.652L80.0051 123.463L100.451 108.499L123.634 118.723L126.37 143.912L105.924 158.877L82.7415 148.652Z"
                    stroke="url(#paint14_linear_1361_13863)"
                    stroke-width="0.368312"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_di_1361_13863"
                    x="0.112305"
                    y="0"
                    width="238.124"
                    height="261.349"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="12" dy="12" />
                    <feGaussianBlur stdDeviation="22" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.6 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1361_13863"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1361_13863"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="20" dy="18" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_1361_13863"
                    />
                  </filter>
                  <filter
                    id="filter1_b_1361_13863"
                    x="127.543"
                    y="27.1101"
                    width="100.89"
                    height="108.755"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_13863"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_13863"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_1361_13863"
                    x="119.207"
                    y="152.428"
                    width="85.7578"
                    height="92.3157"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_13863"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_13863"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_b_1361_13863"
                    x="26.6973"
                    y="151"
                    width="60.7773"
                    height="65.1716"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_13863"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_13863"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_b_1361_13863"
                    x="58.9215"
                    y="66.2081"
                    width="33.5495"
                    height="35.9763"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="1.38006"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_13863"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_13863"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_b_1361_13863"
                    x="75.2067"
                    y="103.683"
                    width="55.9617"
                    height="60.0086"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="2.30195"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_13863"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_13863"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_1361_13863"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(206.404 132.08) rotate(-117.177) scale(78.0117 127.558)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint1_linear_1361_13863"
                    x1="115.023"
                    y1="92.3773"
                    x2="202.339"
                    y2="29.1227"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.13192" stop-color="#E6886A" />
                    <stop
                      offset="0.9375"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1361_13863"
                    x1="132.543"
                    y1="61.4445"
                    x2="223.432"
                    y2="101.531"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#E6886A" />
                  </linearGradient>
                  <radialGradient
                    id="paint3_radial_1361_13863"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(185.772 240.756) rotate(-117.177) scale(65.0251 106.323)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint4_linear_1361_13863"
                    x1="109.603"
                    y1="207.663"
                    x2="182.383"
                    y2="154.938"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.13192" stop-color="#E6886A" />
                    <stop
                      offset="0.9375"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_1361_13863"
                    x1="124"
                    y1="206.5"
                    x2="206.5"
                    y2="177"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#E6886A" />
                  </linearGradient>
                  <radialGradient
                    id="paint6_radial_1361_13863"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(72.9613 211.85) rotate(-117.177) scale(43.5827 71.2628)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint7_linear_1361_13863"
                    x1="21.9095"
                    y1="189.67"
                    x2="70.6901"
                    y2="154.331"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.13192" stop-color="#E6886A" />
                    <stop
                      offset="0.9375"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_1361_13863"
                    x1="31.6976"
                    y1="172.388"
                    x2="82.4744"
                    y2="194.784"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#E6886A" />
                  </linearGradient>
                  <radialGradient
                    id="paint9_radial_1361_13863"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(84.46 99.799) rotate(-117.177) scale(24.0588 39.3388)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint10_linear_1361_13863"
                    x1="56.2781"
                    y1="87.5547"
                    x2="83.2062"
                    y2="68.047"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.13192" stop-color="#E6886A" />
                    <stop
                      offset="0.9375"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_1361_13863"
                    x1="61.6814"
                    y1="78.015"
                    x2="89.7114"
                    y2="90.3777"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#E6886A" />
                  </linearGradient>
                  <radialGradient
                    id="paint12_radial_1361_13863"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(117.805 159.713) rotate(-117.177) scale(40.1301 65.6172)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint13_linear_1361_13863"
                    x1="70.7978"
                    y1="139.289"
                    x2="115.714"
                    y2="106.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.13192" stop-color="#E6886A" />
                    <stop
                      offset="0.9375"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint14_linear_1361_13863"
                    x1="79.8105"
                    y1="123.377"
                    x2="126.565"
                    y2="143.998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#E6886A" />
                  </linearGradient>
                </defs>
              </svg>
              <AppButton100
                className="bg-Red100"
                label="Take FREE Assessment"
              />
            </div>
          </div>
          <div
            className="w-full h-[444px] bg-Green500 rounded-[40px] relative grid cursor-pointer"
            onClick={() => navigate("concepts/strategy")}
          >
            <div className="w-[60px] h-[60px] bg-Greyscale absolute -top-1 -right-[0.03rem] rounded-bl-[40px]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0"
              >
                <rect width="48" height="48" rx="24" fill="#425740" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.5858 25.0001H15V23.0001H29.5858L23.2929 16.7072L24.7071 15.293L33.4142 24.0001L24.7071 32.7072L23.2929 31.293L29.5858 25.0001Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="grid content-between p-[25px]">
              <p className="text-[30px] w-4/5 font-semibold text-Greyscale leading-tight">
                Strategy & Change
              </p>
              <svg
                width="236"
                height="236"
                viewBox="0 0 236 236"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="justify-self-center"
              >
                <rect width="236" height="236" fill="#425740" />
                <path
                  d="M212.202 145.013C214.326 145.621 216.549 144.395 217.074 142.249C221.004 126.193 220.977 109.402 216.969 93.324C212.637 75.9512 203.809 60.0245 191.371 47.1449C178.934 34.2653 163.325 24.8866 146.114 19.9514C130.186 15.3842 113.405 14.7714 97.2221 18.1385C95.0593 18.5885 93.756 20.7676 94.2904 22.9111L117.44 115.759C117.786 117.146 118.845 118.243 120.219 118.637L212.202 145.013Z"
                  fill="#DAE3D9"
                />
                <path
                  d="M212.202 145.013C214.326 145.621 216.549 144.395 217.074 142.249C221.004 126.193 220.977 109.402 216.969 93.324C212.637 75.9512 203.809 60.0245 191.371 47.1449C178.934 34.2653 163.325 24.8866 146.114 19.9514C130.186 15.3842 113.405 14.7714 97.2221 18.1385C95.0593 18.5885 93.756 20.7676 94.2904 22.9111L117.44 115.759C117.786 117.146 118.845 118.243 120.219 118.637L212.202 145.013Z"
                  fill="url(#paint0_linear_1361_30357)"
                />
                <path
                  d="M94.2904 22.9111C93.756 20.7676 91.5822 19.4554 89.4613 20.0735C73.5916 24.6981 59.0628 33.1171 47.1436 44.6274C34.264 57.0651 24.8853 72.6739 19.9501 89.885C15.0148 107.096 14.6971 125.303 19.0286 142.676C23.0371 158.754 30.8968 173.592 41.9044 185.924C43.3755 187.572 45.9143 187.611 47.5034 186.077L116.338 119.604C117.365 118.612 117.786 117.146 117.44 115.759L94.2904 22.9111Z"
                  fill="#DAE3D9"
                />
                <path
                  d="M94.2904 22.9111C93.756 20.7676 91.5822 19.4554 89.4613 20.0735C73.5916 24.6981 59.0628 33.1171 47.1436 44.6274C34.264 57.0651 24.8853 72.6739 19.9501 89.885C15.0148 107.096 14.6971 125.303 19.0286 142.676C23.0371 158.754 30.8968 173.592 41.9044 185.924C43.3755 187.572 45.9143 187.611 47.5034 186.077L116.338 119.604C117.365 118.612 117.786 117.146 117.44 115.759L94.2904 22.9111Z"
                  fill="url(#paint1_linear_1361_30357)"
                />
                <path
                  d="M47.5035 186.077C45.9143 187.611 45.8649 190.15 47.4606 191.678C59.4004 203.109 73.956 211.482 89.8837 216.049C107.095 220.984 125.302 221.302 142.675 216.97C160.048 212.639 175.974 203.81 188.854 191.373C200.773 179.862 209.694 165.636 214.87 149.938C215.561 147.84 214.326 145.621 212.202 145.013L120.219 118.637C118.845 118.243 117.365 118.612 116.338 119.604L47.5035 186.077Z"
                  fill="#DAE3D9"
                />
                <path
                  d="M47.5035 186.077C45.9143 187.611 45.8649 190.15 47.4606 191.678C59.4004 203.109 73.956 211.482 89.8837 216.049C107.095 220.984 125.302 221.302 142.675 216.97C160.048 212.639 175.974 203.81 188.854 191.373C200.773 179.862 209.694 165.636 214.87 149.938C215.561 147.84 214.326 145.621 212.202 145.013L120.219 118.637C118.845 118.243 117.365 118.612 116.338 119.604L47.5035 186.077Z"
                  fill="url(#paint2_linear_1361_30357)"
                />
                <path
                  d="M216.969 93.324C220.977 109.402 221.004 126.193 217.074 142.249C216.549 144.395 214.326 145.621 212.202 145.013L120.219 118.637C118.845 118.243 117.786 117.146 117.44 115.759L94.2904 22.9111C93.756 20.7676 95.0593 18.5885 97.2221 18.1385C113.405 14.7714 130.186 15.3842 146.114 19.9514C163.325 24.8866 178.934 34.2653 191.371 47.1449C203.809 60.0245 212.637 75.9512 216.969 93.324Z"
                  stroke="#425740"
                  stroke-width="2"
                />
                <path
                  d="M47.1436 44.6274C59.0628 33.1171 73.5916 24.6981 89.4613 20.0735C91.5822 19.4554 93.756 20.7676 94.2904 22.9111L117.44 115.759C117.786 117.146 117.365 118.612 116.338 119.604L47.5034 186.077C45.9143 187.611 43.3755 187.572 41.9044 185.924C30.8968 173.592 23.0372 158.754 19.0286 142.676C14.697 125.303 15.0149 107.096 19.9501 89.885C24.8853 72.6739 34.264 57.0651 47.1436 44.6274Z"
                  stroke="#425740"
                  stroke-width="2"
                />
                <path
                  d="M89.8837 216.049C73.956 211.482 59.4004 203.109 47.4606 191.678C45.8649 190.15 45.9143 187.611 47.5035 186.077L116.338 119.604C117.365 118.612 118.845 118.243 120.219 118.637L212.202 145.013C214.326 145.621 215.561 147.84 214.87 149.938C209.694 165.636 200.773 179.862 188.854 191.373C175.974 203.81 160.048 212.639 142.675 216.97C125.302 221.302 107.095 220.984 89.8837 216.049Z"
                  stroke="#425740"
                  stroke-width="2"
                />
                <g filter="url(#filter0_bd_1361_30357)">
                  <path
                    d="M159.765 75.2717C160.406 73.9841 158.992 72.6453 157.741 73.3553L103.914 103.909C92.3764 110.458 90.3463 126.245 99.8516 135.5C109.682 145.331 126.258 142.624 132.45 130.177L159.765 75.2717Z"
                    fill="white"
                  />
                  <path
                    d="M159.765 75.2717C160.406 73.9841 158.992 72.6453 157.741 73.3553L103.914 103.909C92.3764 110.458 90.3463 126.245 99.8516 135.5C109.682 145.331 126.258 142.624 132.45 130.177L159.765 75.2717Z"
                    fill="url(#paint3_linear_1361_30357)"
                  />
                </g>
                <g filter="url(#filter1_d_1361_30357)">
                  <circle cx="118" cy="118" r="4" fill="#DAE3D9" />
                </g>
                <defs>
                  <filter
                    id="filter0_bd_1361_30357"
                    x="78.9022"
                    y="63.2087"
                    width="90.9729"
                    height="93.1772"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4.97465"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_30357"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-4.14555" dy="4.14555" />
                    <feGaussianBlur stdDeviation="5.38921" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.258824 0 0 0 0 0.341176 0 0 0 0 0.25098 0 0 0 0.7 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_1361_30357"
                      result="effect2_dropShadow_1361_30357"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1361_30357"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1361_30357"
                    x="100"
                    y="104"
                    width="36"
                    height="36"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0214286 0 0 0 0 0.222857 0 0 0 0 0.0171429 0 0 0 0.6 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1361_30357"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1361_30357"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1361_30357"
                    x1="118"
                    y1="100.5"
                    x2="194"
                    y2="29.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8CA88A" />
                    <stop offset="0.86366" stop-color="#425740" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1361_30357"
                    x1="118"
                    y1="118"
                    x2="-5.49998"
                    y2="52.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8CA88A" />
                    <stop offset="0.86366" stop-color="#425740" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1361_30357"
                    x1="118"
                    y1="100.5"
                    x2="158.5"
                    y2="233"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8CA88A" />
                    <stop offset="0.86366" stop-color="#425740" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1361_30357"
                    x1="40.6107"
                    y1="110.549"
                    x2="126.261"
                    y2="193.922"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0899857" stop-color="#DAE3D9" />
                    <stop offset="0.519929" stop-color="#425740" />
                  </linearGradient>
                </defs>
              </svg>
              <AppButton100
                className="bg-Green100"
                label="Take FREE Assessment"
              />
            </div>
          </div>
          <div
            className="w-full h-[444px] bg-Blue500 rounded-[40px] relative grid cursor-pointer"
            onClick={() => navigate("concepts/innovation")}
          >
            <div className="w-[60px] h-[60px] bg-Greyscale absolute -top-1 -right-[0.03rem] rounded-bl-[40px]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0"
              >
                <rect width="48" height="48" rx="24" fill="#315C90" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.5858 25.0001H15V23.0001H29.5858L23.2929 16.7072L24.7071 15.293L33.4142 24.0001L24.7071 32.7072L23.2929 31.293L29.5858 25.0001Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="grid content-between p-[25px]">
              <p className="text-[30px] w-4/5 font-semibold text-Greyscale leading-tight">
                Innovation & Analytics
              </p>
              <svg
                width="236"
                height="241"
                viewBox="0 0 236 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="justify-self-center"
              >
                <g filter="url(#filter0_b_1361_22354)">
                  <rect width="236" height="236" fill="#315C90" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.3734 50.3286C40.7084 67.1087 30.119 81.4221 16 90.8739V210H220V90.8758C205.882 81.4256 195.293 67.1147 190.626 50.3374C181.782 80.7107 152.617 103 118.001 103C83.3823 103 54.2145 80.7064 45.3734 50.3286Z"
                    fill="#315C90"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.3734 50.3286C40.7084 67.1087 30.119 81.4221 16 90.8739V210H220V90.8758C205.882 81.4256 195.293 67.1147 190.626 50.3374C181.782 80.7107 152.617 103 118.001 103C83.3823 103 54.2145 80.7064 45.3734 50.3286Z"
                    fill="url(#paint0_linear_1361_22354)"
                  />
                  <g filter="url(#filter1_d_1361_22354)">
                    <path
                      d="M93.8647 112.354L66.0421 108.377C62.407 107.857 61.2314 103.191 64.1863 101.011L122.802 57.7665C125.685 55.6397 129.718 57.9682 129.318 61.5281L121.175 133.914C120.764 137.563 116.136 138.877 113.868 135.989L96.5122 113.883C95.8594 113.051 94.9111 112.504 93.8647 112.354Z"
                      fill="#DAE4F1"
                    />
                  </g>
                  <g filter="url(#filter2_f_1361_22354)">
                    <rect
                      x="16"
                      y="196"
                      width="204"
                      height="35"
                      fill="#315C90"
                    />
                  </g>
                  <path
                    d="M142.817 30.3715C153.81 36.7187 157.577 50.7762 151.23 61.7699C144.883 72.7635 130.825 76.5302 119.832 70.183C108.838 63.8358 105.071 49.7783 111.418 38.7846C117.766 27.791 131.823 24.0243 142.817 30.3715Z"
                    fill="#DAE4F1"
                  />
                  <g filter="url(#filter3_b_1361_22354)">
                    <path
                      d="M100.919 100.215L73.0968 96.2378C69.4617 95.7181 68.286 91.0519 71.2409 88.8719L129.857 45.6273C132.74 43.5006 136.773 45.8291 136.372 49.389L128.23 121.774C127.819 125.423 123.19 126.738 120.923 123.85L103.567 101.744C102.914 100.912 101.966 100.365 100.919 100.215Z"
                      fill="url(#paint1_linear_1361_22354)"
                      fill-opacity="0.3"
                    />
                  </g>
                  <g filter="url(#filter4_b_1361_22354)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M71.3038 88.9544C68.4227 91.0799 69.569 95.6295 73.1132 96.1361L100.936 100.114C102.008 100.267 102.98 100.828 103.649 101.68L121.005 123.787C123.216 126.603 127.729 125.321 128.13 121.763L136.272 49.3774C136.663 45.9065 132.731 43.6363 129.92 45.7099L71.3038 88.9544ZM73.0842 96.3393C69.3582 95.8067 68.1532 91.0238 71.1819 88.7893L129.798 45.5447C132.753 43.3648 136.887 45.7515 136.476 49.4004L128.334 121.786C127.913 125.526 123.168 126.874 120.844 123.913L103.488 101.807C102.852 100.996 101.927 100.463 100.907 100.317L73.0842 96.3393Z"
                      fill="url(#paint2_linear_1361_22354)"
                      fill-opacity="0.3"
                    />
                  </g>
                  <path d="M46 16V220" stroke="#DAE4F1" />
                  <path d="M191 16V220" stroke="#DAE4F1" />
                  <path d="M16 196H220" stroke="#DAE4F1" />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1361_22354"
                    x="-134"
                    y="-134"
                    width="504"
                    height="504"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="67" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_22354"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_22354"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1361_22354"
                    x="58.5137"
                    y="56.9543"
                    width="74.832"
                    height="88.6096"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.198588 0 0 0 0 0.129412 0 0 0 0 0.372549 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1361_22354"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1361_22354"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_f_1361_22354"
                    x="6"
                    y="186"
                    width="224"
                    height="55"
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
                      stdDeviation="5"
                      result="effect1_foregroundBlur_1361_22354"
                    />
                  </filter>
                  <filter
                    id="filter3_b_1361_22354"
                    x="57.2552"
                    y="32.5021"
                    width="91.4583"
                    height="105.236"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="6.15656"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_22354"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_22354"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_b_1361_22354"
                    x="39.4688"
                    y="14.7122"
                    width="127.036"
                    height="140.815"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1361_22354"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1361_22354"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1361_22354"
                    x1="14"
                    y1="154"
                    x2="212"
                    y2="157.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#315C90" stop-opacity="0" />
                    <stop offset="0.152634" stop-color="#85A9D5" />
                    <stop
                      offset="0.525697"
                      stop-color="#315C90"
                      stop-opacity="0.09"
                    />
                    <stop
                      offset="0.890756"
                      stop-color="#85A9D5"
                      stop-opacity="0.782753"
                    />
                    <stop offset="1" stop-color="#315C90" stop-opacity="0.73" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1361_22354"
                    x1="77.3811"
                    y1="89.8006"
                    x2="154.35"
                    y2="45.8474"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#85A9D5" />
                    <stop offset="0.447036" stop-color="#3E75B7" />
                    <stop offset="1" stop-color="#85A9D5" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1361_22354"
                    x1="77.2699"
                    y1="89.8287"
                    x2="154.45"
                    y2="45.7392"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5F8FC9" stop-opacity="0.9" />
                    <stop offset="0.447036" stop-color="#85A9D5" />
                    <stop offset="1" stop-color="#5F8FC9" stop-opacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
              <AppButton100
                className="bg-Blue100"
                label="Take FREE Assessment"
              />
            </div>
          </div>
          <div
            className="w-full h-[444px] bg-Yellow500 rounded-[40px] relative grid cursor-pointer"
            onClick={() => navigate("concepts/execution")}
          >
            <div className="w-[60px] h-[60px] bg-Greyscale absolute -top-1 -right-[0.03rem] rounded-bl-[40px]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0"
              >
                <rect width="48" height="48" rx="24" fill="#DFBF34" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.5858 25.0001H15V23.0001H29.5858L23.2929 16.7072L24.7071 15.293L33.4142 24.0001L24.7071 32.7072L23.2929 31.293L29.5858 25.0001Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
            <div className="grid content-between p-[25px]">
              <p className="text-[30px] w-4/5 font-semibold text-white leading-tight">
                Execution & Agility
              </p>
              <svg
                width="239"
                height="239"
                viewBox="0 0 239 239"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="justify-self-center"
              >
                <rect width="236" height="236" fill="#DFBF34" />
                <g filter="url(#filter0_i_1361_29346)">
                  <circle
                    cx="118"
                    cy="118"
                    r="98"
                    transform="rotate(30 118 118)"
                    stroke="#DFBF34"
                    stroke-width="8"
                  />
                </g>
                <g filter="url(#filter1_i_1361_29346)">
                  <circle
                    cx="118"
                    cy="118"
                    r="78"
                    transform="rotate(45 118 118)"
                    stroke="#DFBF34"
                    stroke-width="8"
                  />
                </g>
                <g filter="url(#filter2_i_1361_29346)">
                  <circle
                    cx="117.999"
                    cy="118"
                    r="58"
                    transform="rotate(60 117.999 118)"
                    stroke="#DFBF34"
                    stroke-width="8"
                  />
                </g>
                <g filter="url(#filter3_i_1361_29346)">
                  <circle
                    cx="118"
                    cy="118"
                    r="38"
                    transform="rotate(90 118 118)"
                    stroke="#DFBF34"
                    stroke-width="8"
                  />
                </g>
                <g filter="url(#filter4_f_1361_29346)">
                  <circle cx="118" cy="118" r="22" fill="#F9F2D7" />
                </g>
                <g filter="url(#filter5_d_1361_29346)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M119.178 78.9596C118.773 77.2182 117.228 75.9602 115.443 76.0711C113.134 76.2147 110.805 76.5517 108.476 77.0939C85.8846 82.3536 71.8341 104.932 77.0938 127.523C82.3535 150.115 104.932 164.166 127.523 158.906C150.115 153.646 164.166 131.068 158.906 108.476C158.098 105.007 156.882 101.738 155.32 98.7106C154.558 97.2346 152.866 96.5349 151.248 96.9115C148.587 97.5311 147.397 100.68 148.588 103.139C149.673 105.376 150.527 107.767 151.114 110.29C155.372 128.579 143.998 146.856 125.709 151.114C107.421 155.372 89.1433 143.998 84.8855 125.709C80.6276 107.421 92.0018 89.1434 110.29 84.8855C111.905 84.5097 113.519 84.2556 115.124 84.1174C117.724 83.8934 119.77 81.5012 119.178 78.9596Z"
                    fill="url(#paint0_linear_1361_29346)"
                  />
                </g>
                <g filter="url(#filter6_d_1361_29346)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M86.9996 64.3057C95.8757 59.1811 105.492 56.5007 115.07 56.0556C117.248 55.9544 118.997 57.746 118.997 59.9263C118.997 62.1635 117.158 63.9496 114.925 64.0752C106.756 64.5345 98.5688 66.8639 90.9996 71.2339C65.1718 86.1456 56.3226 119.171 71.2342 144.999C86.1459 170.827 119.172 179.676 145 164.765C153.426 159.899 160.046 153.106 164.622 145.263C165.844 143.17 168.58 142.411 170.59 143.766C172.239 144.877 172.82 147.045 171.835 148.772C166.572 158.001 158.864 165.998 149 171.693C119.345 188.814 81.4269 178.653 64.306 148.999C47.1852 119.345 57.3455 81.4265 86.9996 64.3057Z"
                    fill="url(#paint1_linear_1361_29346)"
                  />
                </g>
                <g filter="url(#filter7_d_1361_29346)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M184.788 79.6112C183.471 80.8931 183.192 82.8956 184.023 84.5348C198.107 112.308 193.541 147.111 170.326 170.326C141.427 199.225 94.5729 199.225 65.6741 170.326C36.7753 141.428 36.7753 94.5734 65.6741 65.6746C79.3475 52.0013 97.0405 44.7974 114.949 44.0631C117.176 43.9718 119 42.1845 119 39.9558C119 37.767 117.239 35.975 115.051 36.0532C95.0592 36.7682 75.2787 44.7563 60.0172 60.0178C27.9943 92.0408 27.9943 143.96 60.0172 175.983C92.0402 208.006 143.96 208.006 175.983 175.983C201.818 150.148 206.81 111.362 190.959 80.5216C189.761 78.1918 186.665 77.7841 184.788 79.6112Z"
                    fill="url(#paint2_linear_1361_29346)"
                  />
                </g>
                <g filter="url(#filter8_d_1361_29346)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M117.999 19.9882C117.999 17.7772 116.204 15.9772 113.995 16.0661C80.2052 17.4259 47.8248 35.5484 29.6658 67.0007C1.49932 115.787 18.2146 178.169 67.0004 206.335C115.786 234.502 178.169 217.787 206.335 169.001C230.4 127.319 221.703 75.7125 188.233 43.9999C185.688 41.5885 181.677 43.482 181.677 46.988C181.677 48.1595 182.174 49.276 183.021 50.0855C213.62 79.334 221.513 126.711 199.407 165.001C173.449 209.96 115.96 225.364 71.0004 199.407C26.0409 173.45 10.6367 115.96 36.594 71.0007C53.2739 42.1103 82.9739 25.4238 114.003 24.0738C116.209 23.9779 117.999 22.1962 117.999 19.9882Z"
                    fill="url(#paint3_linear_1361_29346)"
                  />
                </g>
                <g filter="url(#filter9_i_1361_29346)">
                  <circle cx="118" cy="118" r="12" fill="#DFBF34" />
                </g>
                <defs>
                  <filter
                    id="filter0_i_1361_29346"
                    x="15.9824"
                    y="15.9832"
                    width="204.034"
                    height="207.034"
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
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.976471 0 0 0 0 0.94902 0 0 0 0 0.843137 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1361_29346"
                    />
                  </filter>
                  <filter
                    id="filter1_i_1361_29346"
                    x="36"
                    y="36.0005"
                    width="164"
                    height="167"
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
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.976471 0 0 0 0 0.94902 0 0 0 0 0.843137 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1361_29346"
                    />
                  </filter>
                  <filter
                    id="filter2_i_1361_29346"
                    x="55.9883"
                    y="55.9893"
                    width="124.021"
                    height="127.021"
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
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.976471 0 0 0 0 0.94902 0 0 0 0 0.843137 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1361_29346"
                    />
                  </filter>
                  <filter
                    id="filter3_i_1361_29346"
                    x="76"
                    y="76.0002"
                    width="84"
                    height="87"
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
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.976471 0 0 0 0 0.94902 0 0 0 0 0.843137 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1361_29346"
                    />
                  </filter>
                  <filter
                    id="filter4_f_1361_29346"
                    x="81"
                    y="81"
                    width="74"
                    height="74"
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
                      stdDeviation="7.5"
                      result="effect1_foregroundBlur_1361_29346"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1361_29346"
                    x="65.9902"
                    y="66.0645"
                    width="112.019"
                    height="111.945"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1361_29346"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1361_29346"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter6_d_1361_29346"
                    x="45.9893"
                    y="46.0515"
                    width="144.327"
                    height="151.958"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1361_29346"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1361_29346"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter7_d_1361_29346"
                    x="26"
                    y="26.0508"
                    width="192"
                    height="191.95"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1361_29346"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1361_29346"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter8_d_1361_29346"
                    x="5.9834"
                    y="6.06299"
                    width="232.034"
                    height="231.955"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1361_29346"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1361_29346"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter9_i_1361_29346"
                    x="106"
                    y="106"
                    width="24"
                    height="28"
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
                      values="0 0 0 0 0.87451 0 0 0 0 0.74902 0 0 0 0 0.203922 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1361_29346"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1361_29346"
                    x1="104.5"
                    y1="81.4999"
                    x2="168"
                    y2="153"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F2D7" />
                    <stop offset="1" stop-color="#DFBF34" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1361_29346"
                    x1="107.406"
                    y1="61.0535"
                    x2="177.016"
                    y2="181.353"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F2D7" />
                    <stop offset="1" stop-color="#DFBF34" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1361_29346"
                    x1="108.488"
                    y1="42.6665"
                    x2="197.54"
                    y2="206.71"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F2D7" />
                    <stop offset="1" stop-color="#DFBF34" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1361_29346"
                    x1="106.167"
                    y1="24.293"
                    x2="216.943"
                    y2="228.372"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F2D7" />
                    <stop offset="1" stop-color="#DFBF34" />
                  </linearGradient>
                </defs>
              </svg>
              <AppButton100
                className="bg-Yellow100"
                label="Take FREE Assessment"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12">
          <p className="text-[44px] lg:text-[56px] font-bold lg:font-medium">
            About Dr Tom
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-[32px_0]">
            <p className="text-[18px] lg:text-[30px] font-bold md:col-span-2 lg:[grid-column:2/4] lg:ml-4">
              Dr. Tom Hunsaker is an international bestselling author and senior
              advisor whose work has influenced management practice worldwide.
            </p>
            <img
              src={tom}
              alt="tom"
              className="w-full rounded-[20px] lg:[grid-row:1/3] lg:pr-4"
            />
            <p className="text-[18px] pt-8 border-t-[1px] border-t-Greyscale700 lg:ml-4 lg:pr-4">
              Tom's research and related concepts are widely recommended in
              leading universities, featured in popular press globally, and he
              is among the most published authors in the world's top two
              management practice outlets Harvard Business Review and MIT Sloan
              Review.
            </p>
            <div className="pt-8 border-t-[1px] border-t-Greyscale700 grid md:flex gap-8 md:col-span-2 lg:[grid-column:3/4] lg:pl-4">
              <p className="text-[30px] font-bold lg:hidden">
                Speaker
                <br /> Advisor
                <br /> Investor
              </p>
              <p className="text-[18px]">
                Tom is regularly asked to advise Fortune 500 and emerging
                enterprise leaders and their teams and is a sought-after speaker
                who has delivered keynotes to audiences on five continents from
                a range of sectors.
              </p>
            </div>
            <p className="text-[18px] pt-8 border-t-[1px] border-t-Greyscale700 md:col-span-2 lg:col-span-1 lg:pr-4">
              Tom has held leadership positions or been a principal investor for
              growth firms in the performance technology and analytical sciences
              industries, among others. Tom and his family enjoy serving in
              their community, traveling, and exploring the outdoors with a
              particular love for mountain regions.
            </p>
            <p className="text-[18px] pt-8 border-t-[1px] border-t-Greyscale700 md:col-span-2 lg:col-span-1 lg:px-4">
              He previously served as Associate Dean of Innovation for the
              Thunderbird School of Global Management (then top-ranked worldwide
              in its field) and helped to pioneer its Global Challenge Lab.
            </p>
            <p className="text-[30px] lg:text-[44px] font-bold hidden lg:grid border-t-[1px] border-t-Greyscale700 lg:pl-4">
              Speaker
              <br /> Advisor
              <br /> Investor
            </p>
            <div className="pt-8 border-t-[1px] border-t-Greyscale700 grid gap-8 md:flex md:col-span-2 lg:col-span-3">
              <p className="text-[30px] lg:text-[44px] font-bold md:order-2 w-[235px] lg:w-[368px] md:shrink-0 lg:order-[0]">
                Award-Winning Learning Expert
              </p>
              <p className="text-[18px]">
                Dr. Tom is among the select few in Thunderbird's history to
                receive the distinguished teaching award for best professor in
                each graduate-level program: Executive, Full-time, and Online.
                He has also been a top executive education expert for some of
                the world's leading companies in the various tech, energy,
                advanced chemicals, and aerospace sectors, to name a few.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Blue700 text-Greyscale">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12">
          <p className="text-[44px] font-bold">
            The Difference is in the Research
          </p>
          <p className="text-[18px] font-bold">
            Concepts that stand the test of time are grounded in rigorous
            research. Dr. Tom Hunsaker's research into sustainable growth
            practices sets the standard.
          </p>
          <div className="grid">
            <div className="grid lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">GEOGRAPHY</p>
                <p className="text-[80px] leading-tight">5</p>
                <p className="text-[16px] leading-tight">5 continents</p>
              </div>
              <div className="flex gap-[8.11px] lg:gap-4">
                {[...Array(5)].map((val, index) => (
                  <div
                    className="w-[62px] md:w-[127] h-[62px] md:h-[127] lg:w-[144px] lg:h-[144px] bg-Red700 rounded-full"
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">DURATION</p>
                <p className="text-[80px] leading-tight">10</p>
                <p className="text-[16px] leading-tight">
                  Over 10years (and counting)
                </p>
              </div>
              <div className="grid gap-[8.11px] md:gap-[4.046px] lg:gap-[8px] grid-cols-5 md:grid-cols-10">
                {[...Array(10).keys()].map((val, index) => (
                  <div
                    className="w-[62px] md:w-[63px] lg:w-[71px] h-[62px] md:h-[63px] lg:h-[71px] bg-Yellow700 rounded-full"
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">PERIOD</p>
                <p className="text-[80px] leading-tight">100</p>
                <p className="text-[16px] leading-tight">
                  Over 100years of practice
                </p>
              </div>
              <div className="grid gap-[1.2px] md:gap-[1.011px] lg:gap-[2px] [grid-template-columns:repeat(13,minmax(0,1fr))] md:[grid-template-columns:repeat(26,minmax(0,1fr))]">
                {[...Array(100).keys()].map((val, index) => (
                  <div
                    className="w-[25px] md:w-[24px] lg:w-[28px] h-[25px] md:h-[24px] lg:h-[28px] bg-Green500 rounded-full"
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">BREADTH</p>
                <p className="text-[80px] leading-tight">1,000</p>
                <p className="text-[16px] leading-tight">
                  1,000s of enterprises
                </p>
              </div>
              <div className="grid gap-[1.1px] lg:gap-[2px] [grid-template-columns:repeat(48,minmax(0,1fr))] md:[grid-template-columns:repeat(95,minmax(0,1fr))] lg:[grid-template-columns:repeat(77,minmax(0,1fr))]">
                {[...Array(1000).keys()].map((val, index) => (
                  <div
                    className="w-[6px] lg:w-[8px] h-[6px] lg:h-[8px] bg-Blue500 rounded-full"
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">BREADTH</p>
                <p className="text-[80px] leading-tight">10,000</p>
                <p className="text-[16px] leading-tight">
                  1,000s of enterprises
                </p>
              </div>
              <div className="grid gap-[1px] [grid-template-columns:repeat(114,minmax(0,1fr))] md:[grid-template-columns:repeat(224,minmax(0,1fr))] lg:[grid-template-columns:repeat(258,minmax(0,1fr))]">
                {[...Array(10000).keys()].map((val, index) => (
                  <div
                    className="w-[2px] h-[2px] bg-Greyscale400 rounded-full"
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-8 py-8">
            <div className="grid gap-8 lg:flex lg:justify-between">
              <div className="grid gap-8 lg:self-start">
                <p
                  className="text-[30px] font-bold h-min
                "
                >
                  Impact
                </p>
                <p className="text-[18px]">
                  Dozens of dedicated features and cases in Harvard Business
                  Review and MIT Sloan Management Review and multiple
                  bestselling books.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="py-12 px-4 bg-Greyscale rounded-[20px] w-full grid justify-center items-center">
                  <img src={harvard} alt="Harvard" className="w-full" />
                </div>
                <div className="py-12 px-4 bg-Greyscale rounded-[20px] w-full grid place-items-center">
                  <img src={MIT} alt="MIT" className="w-full" />
                </div>
              </div>
            </div>
            <div className="grid gap-8 mt-16">
              <p
                className="text-[24px] font-bold
            "
              >
                Standard-setting practices in the four sustainable growth
                pillars:
              </p>
              <div className="grid lg:flex lg:gap-0 gap-6 md:gap-5 w-full mt-2">
                <div className="w-full h-36 [background:linear-gradient(88deg,#CB4A22_2.1%,#672713_97.98%),#CB4A22] grid place-items-center md:place-items-start md:items-center md:pl-10 skew-y-2 lg:-skew-y-2 z-[4]">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 -skew-y-2 lg:skew-y-2">
                    Mindset & Culture
                  </p>
                </div>
                <div className="w-full h-36 [background:linear-gradient(272deg,#425740_1.72%,#202F1E_98.26%),#425740] grid place-items-center md:place-items-start md:items-center md:pl-10 -skew-y-2 lg:skew-y-2 z-[3] -mt-4 lg:-mt-0">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 skew-y-2 lg:-skew-y-2">
                    Strategy & Change
                  </p>
                </div>
                <div className="w-full h-36 [background:linear-gradient(86deg,#325D92_2.34%,#172B43_97.03%),#325D92] grid place-items-center md:place-items-start md:items-center md:pl-10 skew-y-2 lg:-skew-y-2 z-[2] -mt-4 lg:-mt-0">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 -skew-y-2 lg:skew-y-2">
                    Innovation & Analytics
                  </p>
                </div>
                <div className="w-full h-36 [background:linear-gradient(93deg,#7B6A1F_2.47%,#DFBF34_97.9%),#DFBF34] grid place-items-center md:place-items-start md:items-center md:pl-10 -skew-y-2 lg:skew-y-2 z-[1] -mt-4 lg:-mt-0">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 skew-y-2 lg:-skew-y-2">
                    Execution & Agility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-Yellow500 overflow-x-hidden">
        <div className="grid lg:flex bg-Yellow500 h-[unset] lg:h-[480px]">
          <div className="grid gap-12 pl-4 md:pl-12 lg:pl-32 pt-12 pb-16 w-[min(584px,100%)] shrink-0 my-auto">
            <p className="text-[56px] font:medium">Speaking</p>
            <div className="grid gap-6">
              <p className="text-[18px]">
                Organizations around the world ranging from rapid-growth
                privately held and top-tier professional service firms through
                Fortune 500 companies and industry associations have benefited
                from Dr Tom's dynamic and instructive keynote engagements.
              </p>
              <div className="grid gap-2">
                <p className="text-[18px]">
                  To inquire about availability and start a conversation email
                </p>
                <div className="text-[18px] flex gap-1 font-bold items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                      stroke="#1C1C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  info@tomhunsaker.com
                </div>
              </div>
            </div>
          </div>
          <img
            src={speech}
            alt="Speech"
            className="w-full h-full object-cover mix-blend-luminosity"
          />
        </div>
      </section>
      <section className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12">
          <div className="grid gap-8">
            <p className="text-[44px] font-bold">Advisory</p>
            <p className="text-[18px]">
              Tom works with CEOs, other senior leaders, and select management
              teams to help them navigate critical growth points in their
              businesses and careers.
              <br />
              <br /> These range from rapid-growth privately held organizations
              through Fortune 500 companies.
            </p>
          </div>
          <div className="grid gap-8">
            <p className="text-[24px] font-bold">
              A small selection of companies that have benefited from Tom's
              work:
            </p>
            <div className="inline-flex base:grid bg-Greyscale rounded-[20px] p-7 items-center flex-wrap gap-[20px_16px] base:gap-[20px_5px] base:[grid-template-columns:repeat(6,auto)] base:justify-items-center">
              {[
                { img: image20, w: "w-[57.6213px] md:w-[67.452px]" },
                { img: image32, w: "w-[83.241px] md:w-[97.444px]" },
                { img: image29, w: "w-[47.107px] md:w-[55.145px]" },
                { img: image24, w: "w-[122.411px] md:w-[143.296px]" },
                { img: image30, w: "w-[97.355px] md:w-[113.965px]" },
                { img: image33, w: "w-[169.848px] md:w-[256.634px]" },
                { img: image31, w: "w-[97px] md:w-[130.029px]" },
                { img: image26, w: "w-[123px] md:w-[151.847px]" },
                { img: image25, w: "w-[146px] md:w-[181.461px]" },
                { img: image27, w: "w-[120.154px] md:w-[140.654px]" },
                { img: image28, w: "w-[44.764px] md:w-[53.504px]" },
                { img: image23, w: "w-[82.068px] md:w-[98.092px]" },
              ].map((image, index) => (
                <img
                  key={index}
                  src={image.img}
                  alt="logo"
                  className={`grayscale ${image.w}`}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4 text-[18px]">
            <p className="font-bold">
              To inquire about availability and start a conversation email
            </p>
            <div className="flex gap-1 font-bold items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                  stroke="#1C1C1C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              info@tomhunsaker.com
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Green700">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12 relative overflow-hidden">
          <img
            src={eclipse}
            alt="eclipse"
            className="absolute z-[1] -top-[12rem] md:-top-[25rem] lg:-top-[12rem] -right-[7rem] md:-right-[14rem] lg:-right-[14rem]"
          />
          <div className="grid gap-6 w-[min(714px,100%)] z-[2] text-Greyscale">
            <p className="text-[44px] lg:text-[56px] font-bold mb-2">
              Affiliate
            </p>
            <p className="text-[24px] lg:text-[30px] font-bold">
              Earn while helping others to grow.
            </p>
            <p className="text-[18px]">
              Become an affiliate of{" "}
              <span className="underline">tomhunsaker.com </span> across the
              world, spread the word to your network, and{" "}
              <span className="font-bold">
                benefit every time someone you refer accesses a bestseller
                bundle
              </span>{" "}
              (book + personalized assessment report + insights guide) featured
              on this site.
            </p>
            <p className="text-[18px]">
              Becoming an affiliate is selective so you’ll be in great company.
              Applying is simple and you’ll receive an approval decision
              quickly.
            </p>
          </div>
          <AffiliateForm />
        </div>
      </section>
      <section className="bg-Greyscale">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12 relative overflow-hidden">
          <p className="text-[44px] md:text-[56px] font-bold">Library</p>
          <div className="grid gap-8">
            <p className="text-[30px] md:text-[44px]  font-bold">Books</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={sharperRed}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Red500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Red500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                />
              </div>
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={sharperRed}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Red500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Red500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                />
              </div>
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={sharperRed}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Red500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Red500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                />
              </div>
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={sharperRed}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Red500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Red500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <p className="text-[30px] md:text-[44px] font-bold">
              Articles & Cases
            </p>
            <ArticlesList />
          </div>
          <div className="grid gap-6 py-8 md:grid-cols-3 items-center">
            <img src={harvard} alt="" className="w-[40%] md:w-[50%] mx-auto" />
            <img src={MIT} alt="" className="w-full" />
            <img src={Wiley} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <section className="bg-Red700 -mb-40 md:-mb-0 lg:-mb-[19rem]">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid lg:grid-cols-[1fr,0.8fr] text-Greyscale relative lg:[position:unset] lg:gap-8 lg:overflow-y-hidden">
          <div className="grid gap-10 text-Greyscale lg:relative">
            <div
              className="bg-Red900 w-[calc(100%-6rem)] lg:w-full h-[61%] lg:h-[65%] absolute top-0 lg:-top-20 justify-self-center hidden md:grid rounded-b-[20px] [clip-path:polygon(0%_0%,100%_0,100%_100%,50%_60%,0%_100%)] lg:[clip-path:polygon(0%_0%,100%_0,100%_100%,50%_75%,0%_100%)]
          "
            ></div>
            <div className="grid z-[1] gap-10 w-[90%] mx-auto">
              <p className="text-[44px] lg:text-[56px] font-bold md:w-[90%]">
                Stay Updated
              </p>
              <div className="grid gap-4">
                <p className="text-[18px]">
                  To inquire about availability and start a conversation email
                </p>
                <div className="md:text-[30px] flex gap-3 font-bold items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                  >
                    <path
                      d="M6.66667 10.5036L16.8461 18.1907L16.8495 18.1935C17.9797 19.0224 18.5452 19.4371 19.1646 19.5973C19.712 19.7389 20.2875 19.7389 20.835 19.5973C21.4549 19.4369 22.022 19.021 23.1543 18.1907C23.1543 18.1907 29.6835 13.1801 33.3333 10.5036M5 26.8372V14.1706C5 12.3037 5 11.3696 5.36331 10.6566C5.68289 10.0294 6.19245 9.5198 6.81966 9.20023C7.5327 8.83691 8.46682 8.83691 10.3337 8.83691H29.667C31.5338 8.83691 32.466 8.83691 33.179 9.20023C33.8062 9.5198 34.3175 10.0294 34.637 10.6566C35 11.3689 35 12.3019 35 14.1651V26.8429C35 28.7061 35 29.6377 34.637 30.3501C34.3175 30.9773 33.8062 31.4877 33.179 31.8073C32.4667 32.1702 31.535 32.1702 29.6718 32.1702H10.3282C8.46499 32.1702 7.532 32.1702 6.81966 31.8073C6.19245 31.4877 5.68289 30.9773 5.36331 30.3501C5 29.637 5 28.7041 5 26.8372Z"
                      stroke="#FDFDFD"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  info@tomhunsaker.com
                </div>
              </div>
              <div className="text-[18px] md:text-[30px] flex gap-3 items-center border-t border-t-Greyscale200 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M22.2234 0.0644531H1.77187C0.792187 0.0644531 0 0.837891 0 1.79414V22.3301C0 23.2863 0.792187 24.0645 1.77187 24.0645H22.2234C23.2031 24.0645 24 23.2863 24 22.3348V1.79414C24 0.837891 23.2031 0.0644531 22.2234 0.0644531ZM7.12031 20.516H3.55781V9.05976H7.12031V20.516ZM5.33906 7.49883C4.19531 7.49883 3.27188 6.57539 3.27188 5.43633C3.27188 4.29727 4.19531 3.37383 5.33906 3.37383C6.47813 3.37383 7.40156 4.29727 7.40156 5.43633C7.40156 6.5707 6.47813 7.49883 5.33906 7.49883ZM20.4516 20.516H16.8937V14.9473C16.8937 13.6207 16.8703 11.9098 15.0422 11.9098C13.1906 11.9098 12.9094 13.3582 12.9094 14.8535V20.516H9.35625V9.05976H12.7687V10.6254H12.8156C13.2891 9.72539 14.4516 8.77383 16.1813 8.77383C19.7859 8.77383 20.4516 11.1457 20.4516 14.2301V20.516Z"
                    fill="#FDFDFD"
                  />
                </svg>
                Follow on LinkedIn for practical insights and more
              </div>
            </div>
            <div className="mt-10 relative grid">
              <div className="grid">
                <div className="[clip-path:polygon(50%_0%,0%_100%,100%_100%)] w-full h-[140px] md:h-[510px] lg:h-[200px] bg-Red900 rounded-[20px] -mb-4"></div>
                <div className="w-[90%] mx-auto h-[260px] lg:h-[444px] bg-Red100 rounded-[6px] absolute z-[1] -translate-x-[50%] left-1/2 p-5 md:hidden lg:grid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="95"
                    viewBox="0 0 53 95"
                    fill="none"
                    className="lg:hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M52.0764 1.86146C52.0764 1.34685 51.6593 0.929688 51.1447 0.929688H1.29505C0.780448 0.929688 0.363281 1.34685 0.363281 1.86146V5.58772C0.363281 6.10232 0.780451 6.51949 1.29505 6.51949H51.1447C51.6593 6.51949 52.0764 6.10232 52.0764 5.58772V1.86146ZM52.0764 13.0419C52.0764 12.5273 51.6593 12.1101 51.1447 12.1101H1.29505C0.780448 12.1101 0.363281 12.5273 0.363281 13.0419V16.77C0.363281 17.2846 0.780451 17.7018 1.29505 17.7018H51.1447C51.6593 17.7018 52.0764 17.2846 52.0764 16.77V13.0419ZM1.29505 28.8836C0.780448 28.8836 0.363281 28.4664 0.363281 27.9518V24.2241C0.363281 23.7095 0.780451 23.2924 1.29505 23.2924H51.1447C51.6593 23.2924 52.0764 23.7095 52.0764 24.2241V27.9518C52.0764 28.4664 51.6593 28.8836 51.1447 28.8836H1.29505ZM1.29505 34.4742C0.780451 34.4742 0.363281 34.8914 0.363281 35.406V94.0026C0.363281 94.6938 1.08941 95.1444 1.70874 94.8375L25.8062 82.8974C26.0668 82.7682 26.3729 82.7682 26.6335 82.8974L50.731 94.8375C51.3503 95.1444 52.0764 94.6938 52.0764 94.0026V35.406C52.0764 34.8914 51.6593 34.4742 51.1447 34.4742H1.29505Z"
                      fill="#9D391A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="93"
                    height="168"
                    viewBox="0 0 93 168"
                    fill="none"
                    className="hidden lg:grid"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M92.2695 1.66251C92.2695 0.744333 91.5252 0 90.607 0H1.66251C0.744333 0 0 0.744332 0 1.66251V8.31144C0 9.22963 0.744332 9.97396 1.66251 9.97396H90.607C91.5252 9.97396 92.2695 9.22963 92.2695 8.31145V1.66251ZM92.2695 21.6116C92.2695 20.6934 91.5252 19.949 90.607 19.949H1.66251C0.744333 19.949 0 20.6934 0 21.6116V28.2632C0 29.1814 0.744332 29.9257 1.66251 29.9257H90.607C91.5252 29.9257 92.2695 29.1814 92.2695 28.2632V21.6116ZM1.66251 49.8767C0.744333 49.8767 0 49.1324 0 48.2142V41.5633C0 40.6451 0.744332 39.9008 1.66251 39.9008H90.607C91.5252 39.9008 92.2695 40.6451 92.2695 41.5633V48.2142C92.2695 49.1324 91.5252 49.8767 90.607 49.8767H1.66251ZM1.66251 59.8518C0.744332 59.8518 0 60.5961 0 61.5143V166.066C0 167.299 1.29559 168.103 2.40064 167.556L45.3966 146.251C45.8617 146.021 46.4078 146.021 46.8729 146.251L89.8689 167.556C90.9739 168.103 92.2695 167.299 92.2695 166.066V61.5143C92.2695 60.5961 91.5252 59.8518 90.607 59.8518H1.66251Z"
                      fill="#9D391A"
                    />
                  </svg>
                </div>
                <SubscriberForm className="absolute w-[90%] mx-auto justify-self-center hidden md:grid lg:hidden z-[1] pb-[250px] -translate-x-[50%] left-1/2" />
                <div className="w-full h-[270px] md:h-[512px] lg:h-[465px] bg-Red900 rounded-[20px] relative grid grid-cols-2 py-3 overflow-hidden">
                  <div className="[clip-path:polygon(100%_50%,0_0,0_100%)] w-full h-full bg-Red500 justify-self-start self-center rounded-[5px] z-[2]"></div>
                  <div className="[clip-path:polygon(0%_50%,100%_0,100%_100%)] w-full h-full bg-Red500 justify-self-start self-center rounded-[5px] z-[2]"></div>
                  <div className="[clip-path:polygon(50%_0%,0%_100%,100%_100%)] w-full md:w-[105%] md:justify-self-center h-1/2 bg-Red900 rounded-[20px] z-[2] absolute bottom-0"></div>
                </div>
              </div>
            </div>
          </div>
          <SubscriberForm
            className="hidden lg:grid h-fit [box-shadow:24px_24px_30px_0px_rgba(70,25,12,0.30)]
"
          />
        </div>
      </section>
      <SubscriberForm className="grid md:hidden z-[2]" />
    </div>
  );
}
