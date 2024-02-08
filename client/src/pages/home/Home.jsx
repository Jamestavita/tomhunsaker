import React from "react";
import AppButton100 from "../../components/reuseable/AppButtons";
import tom from "../../assets/tom.png";
import harvard from "../../assets/harvard.png";
import MIT from "../../assets/MIT.png";
import speech from "../../assets/speech.jpeg";

export default function Home() {
  return (
    <div className=" bg-Greyscale mx-auto">
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
              <AppButton100 bg="bg-Red100" title="Take FREE Assessment" />
            </div>
          </div>
          <div
            className="w-full h-[444px] bg-Green500 rounded-[40px] relative grid cursor-pointer"
            onClick={() => navigate("concepts/strategy_change")}
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
              <AppButton100 bg="bg-Green100" title="Take FREE Assessment" />
            </div>
          </div>
          <div
            className="w-full h-[444px] bg-Blue500 rounded-[40px] relative grid cursor-pointer"
            onClick={() => navigate("concepts/innovation_analytics")}
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.3734 50.3286C40.7084 67.1087 30.119 81.4221 16 90.8739V210H220V90.8758C205.882 81.4256 195.293 67.1147 190.626 50.3374C181.782 80.7107 152.617 103 118.001 103C83.3823 103 54.2145 80.7064 45.3734 50.3286Z"
                    fill="#315C90"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
              <AppButton100 bg="bg-Blue100" title="Take FREE Assessment" />
            </div>
          </div>
          <div
            className="w-full h-[444px] bg-Yellow500 rounded-[40px] relative grid cursor-pointer"
            onClick={() => navigate("concepts/execution_agility")}
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M119.178 78.9596C118.773 77.2182 117.228 75.9602 115.443 76.0711C113.134 76.2147 110.805 76.5517 108.476 77.0939C85.8846 82.3536 71.8341 104.932 77.0938 127.523C82.3535 150.115 104.932 164.166 127.523 158.906C150.115 153.646 164.166 131.068 158.906 108.476C158.098 105.007 156.882 101.738 155.32 98.7106C154.558 97.2346 152.866 96.5349 151.248 96.9115C148.587 97.5311 147.397 100.68 148.588 103.139C149.673 105.376 150.527 107.767 151.114 110.29C155.372 128.579 143.998 146.856 125.709 151.114C107.421 155.372 89.1433 143.998 84.8855 125.709C80.6276 107.421 92.0018 89.1434 110.29 84.8855C111.905 84.5097 113.519 84.2556 115.124 84.1174C117.724 83.8934 119.77 81.5012 119.178 78.9596Z"
                    fill="url(#paint0_linear_1361_29346)"
                  />
                </g>
                <g filter="url(#filter6_d_1361_29346)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M86.9996 64.3057C95.8757 59.1811 105.492 56.5007 115.07 56.0556C117.248 55.9544 118.997 57.746 118.997 59.9263C118.997 62.1635 117.158 63.9496 114.925 64.0752C106.756 64.5345 98.5688 66.8639 90.9996 71.2339C65.1718 86.1456 56.3226 119.171 71.2342 144.999C86.1459 170.827 119.172 179.676 145 164.765C153.426 159.899 160.046 153.106 164.622 145.263C165.844 143.17 168.58 142.411 170.59 143.766C172.239 144.877 172.82 147.045 171.835 148.772C166.572 158.001 158.864 165.998 149 171.693C119.345 188.814 81.4269 178.653 64.306 148.999C47.1852 119.345 57.3455 81.4265 86.9996 64.3057Z"
                    fill="url(#paint1_linear_1361_29346)"
                  />
                </g>
                <g filter="url(#filter7_d_1361_29346)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M184.788 79.6112C183.471 80.8931 183.192 82.8956 184.023 84.5348C198.107 112.308 193.541 147.111 170.326 170.326C141.427 199.225 94.5729 199.225 65.6741 170.326C36.7753 141.428 36.7753 94.5734 65.6741 65.6746C79.3475 52.0013 97.0405 44.7974 114.949 44.0631C117.176 43.9718 119 42.1845 119 39.9558C119 37.767 117.239 35.975 115.051 36.0532C95.0592 36.7682 75.2787 44.7563 60.0172 60.0178C27.9943 92.0408 27.9943 143.96 60.0172 175.983C92.0402 208.006 143.96 208.006 175.983 175.983C201.818 150.148 206.81 111.362 190.959 80.5216C189.761 78.1918 186.665 77.7841 184.788 79.6112Z"
                    fill="url(#paint2_linear_1361_29346)"
                  />
                </g>
                <g filter="url(#filter8_d_1361_29346)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
              <AppButton100 bg="bg-Yellow100" title="Take FREE Assessment" />
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
                {[...Array(5)].map((val) => (
                  <div className="w-[62px] md:w-[127] h-[62px] md:h-[127] lg:w-[144px] lg:h-[144px] bg-Red700 rounded-full"></div>
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
              <div className="grid gap-[8.11px] md:gap-[4.046px] lg:gap-[8px] grid-cols-5 md:grid-cols-10 ">
                {[...Array(10).keys()].map((val) => (
                  <div className="w-[62px] md:w-[63px] lg:w-[71px] h-[62px] md:h-[63px] lg:h-[71px] bg-Yellow700 rounded-full"></div>
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
                {[...Array(100).keys()].map((val) => (
                  <div className="w-[25px] md:w-[24px] lg:w-[28px] h-[25px] md:h-[24px] lg:h-[28px] bg-Green500 rounded-full"></div>
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
                {[...Array(1000).keys()].map((val) => (
                  <div className="w-[6px] lg:w-[8px] h-[6px] lg:h-[8px] bg-Blue500 rounded-full"></div>
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
                {[...Array(10000).keys()].map((val) => (
                  <div className="w-[2px] h-[2px] bg-Greyscale400 rounded-full"></div>
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
      <section className=" bg-Yellow500 overflow-hidden">
        <div className="flex pl-4 md:pl-12 lg:pl-32 bg-Yellow500 h-[480px]">
          <div className="grid gap-12 pt-12 pb-16 w-[min(584px,100%)] shrink-0 my-auto">
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
    </div>
  );
}
