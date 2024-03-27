import React from "react";
import AppButton100 from "../../../components/reuseable/AppButtons";
import { useNavigate } from "react-router-dom";

export default function ExecutionOverview() {
  const navigate = useNavigate();
  return (
    <div className="">
      <section className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-28 md:pb-12 grid gap-12">
          <p className="text-[56px] md:text-[74px] font-medium leading-tight md:w-[670px] lg:w-2/3">
            Execution & Analytics Assessment
          </p>
        </div>
      </section>
      <section className="[background:linear-gradient(93deg,#DFBF34_48.12%,#7B6A1F_116.32%),#DFBF34;]">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-28 md:pt-8 pb-8 grid gap-12 relative">
          <svg
            width="241"
            height="241"
            viewBox="0 0 241 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-[45%] left-0 md:hidden"
          >
            <rect width="232" height="232" rx="116" fill="#DFBF34" />
            <g filter="url(#filter0_i_739_109247)">
              <circle
                cx="115.999"
                cy="116"
                r="94.9985"
                transform="rotate(30 115.999 116)"
                stroke="#DFBF34"
                strokeWidth="10.5455"
              />
            </g>
            <g filter="url(#filter1_i_739_109247)">
              <circle
                cx="116"
                cy="116.001"
                r="75.3375"
                transform="rotate(45 116 116.001)"
                stroke="#DFBF34"
                strokeWidth="10.5455"
              />
            </g>
            <g filter="url(#filter2_i_739_109247)">
              <path
                d="M143.834 164.217C117.204 179.592 83.1532 170.468 67.7785 143.838C52.4039 117.208 61.5279 83.1572 88.1575 67.7826C114.787 52.408 148.838 61.532 164.213 88.1616C179.588 114.791 170.464 148.842 143.834 164.217Z"
                stroke="#DFBF34"
                strokeWidth="10.5455"
              />
            </g>
            <g filter="url(#filter3_i_739_109247)">
              <circle
                cx="116.001"
                cy="116.001"
                r="36.0154"
                transform="rotate(90 116.001 116.001)"
                stroke="#DFBF34"
                strokeWidth="10.5455"
              />
            </g>
            <g filter="url(#filter4_f_739_109247)">
              <circle cx="116.002" cy="116" r="21.6271" fill="#F9F2D7" />
            </g>
            <g filter="url(#filter5_d_739_109247)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M117.377 78.5592C116.85 76.2971 114.841 74.6552 112.527 74.8537C110.574 75.0212 108.608 75.3302 106.642 75.7878C84.4335 80.9583 70.6213 103.154 75.7918 125.363C80.9624 147.571 103.158 161.384 125.367 156.213C147.575 151.043 161.388 128.847 156.217 106.638C155.491 103.518 154.428 100.563 153.076 97.8033C152.134 95.878 149.942 94.9772 147.854 95.4633C144.343 96.2808 142.822 100.525 144.245 103.838C144.953 105.487 145.525 107.221 145.946 109.03C149.796 125.566 139.512 142.092 122.975 145.942C106.439 149.792 89.9125 139.508 86.0626 122.971C82.2126 106.435 92.4971 89.9085 109.034 86.0586C110.013 85.8306 110.992 85.6522 111.968 85.5217C115.384 85.0652 118.158 81.9159 117.377 78.5592Z"
                fill="url(#paint0_linear_739_109247)"
              />
            </g>
            <g filter="url(#filter6_d_739_109247)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M85.5394 63.2164C93.8601 58.4124 102.843 55.7934 111.823 55.1812C114.689 54.9858 116.995 57.3524 116.995 60.225C116.995 63.1747 114.566 65.5206 111.628 65.7753C104.509 66.3924 97.4089 68.5404 90.8122 72.349C66.7045 86.2676 58.4445 117.094 72.3631 141.202C86.2817 165.309 117.108 173.569 141.216 159.651C148.651 155.358 154.578 149.458 158.813 142.642C160.501 139.925 164.11 138.902 166.763 140.689C168.927 142.148 169.696 144.999 168.36 147.242C163.206 155.895 155.831 163.389 146.489 168.783C117.337 185.614 80.0611 175.626 63.2305 146.474C46.3999 117.323 56.3879 80.047 85.5394 63.2164Z"
                fill="url(#paint1_linear_739_109247)"
              />
            </g>
            <g filter="url(#filter7_d_739_109247)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M180.398 79.4865C178.667 81.1708 178.294 83.7953 179.328 85.9774C191.659 111.988 187.064 144.024 165.544 165.544C138.182 192.906 93.8195 192.906 66.4576 165.544C39.0956 138.182 39.0956 93.8193 66.4576 66.4573C79.029 53.8859 95.1891 47.0904 111.64 46.0708C114.573 45.889 116.979 43.539 116.979 40.601C116.979 37.7164 114.657 35.3502 111.776 35.5004C92.5762 36.5019 73.6661 44.3352 59.0008 59.0005C27.5206 90.4808 27.5206 141.52 59.0008 173.001C90.481 204.481 141.521 204.481 173.001 173.001C197.962 148.039 203.131 110.78 188.508 80.7258C186.989 77.6044 182.885 77.0654 180.398 79.4865Z"
                fill="url(#paint2_linear_739_109247)"
              />
            </g>
            <g filter="url(#filter8_d_739_109247)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M116 20.991C116 18.0766 113.634 15.7004 110.724 15.8564C77.9916 17.6113 46.7729 35.361 29.1615 65.8649C1.47234 113.824 17.9043 175.149 65.8633 202.838C113.822 230.527 175.147 214.095 202.836 166.136C225.948 126.105 218.321 76.7627 187.278 45.4407C183.965 42.0977 178.599 44.6095 178.599 49.3161C178.599 50.834 179.221 52.2829 180.281 53.3695C207.641 81.4208 214.26 125.258 193.704 160.863C168.927 203.779 114.051 218.482 71.136 193.705C28.2208 168.928 13.517 114.053 38.2941 71.1376C53.9557 44.0109 81.6431 28.1561 110.734 26.4193C113.64 26.2459 116 23.9016 116 20.991Z"
                fill="url(#paint3_linear_739_109247)"
              />
            </g>
            <g filter="url(#filter9_i_739_109247)">
              <circle cx="116.008" cy="116" r="11.7966" fill="#DFBF34" />
            </g>
            <defs>
              <filter
                id="filter0_i_739_109247"
                x="15.7109"
                y="15.7119"
                width="200.578"
                height="204.53"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="3.95455" />
                <feGaussianBlur stdDeviation="6.59091" />
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
                  result="effect1_innerShadow_739_109247"
                />
              </filter>
              <filter
                id="filter1_i_739_109247"
                x="35.3906"
                y="35.3901"
                width="161.219"
                height="165.175"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="3.95455" />
                <feGaussianBlur stdDeviation="6.59091" />
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
                  result="effect1_innerShadow_739_109247"
                />
              </filter>
              <filter
                id="filter2_i_739_109247"
                x="55.0391"
                y="55.0405"
                width="121.914"
                height="125.873"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="3.95455" />
                <feGaussianBlur stdDeviation="6.59091" />
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
                  result="effect1_innerShadow_739_109247"
                />
              </filter>
              <filter
                id="filter3_i_739_109247"
                x="74.7109"
                y="74.7124"
                width="82.5781"
                height="86.5307"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="3.95455" />
                <feGaussianBlur stdDeviation="6.59091" />
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
                  result="effect1_innerShadow_739_109247"
                />
              </filter>
              <filter
                id="filter4_f_739_109247"
                x="74.6023"
                y="74.6003"
                width="82.8033"
                height="82.7999"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="9.88637"
                  result="effect1_foregroundBlur_739_109247"
                />
              </filter>
              <filter
                id="filter5_d_739_109247"
                x="61.5291"
                y="61.6556"
                width="119.503"
                height="119.37"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="5.27273" dy="5.27273" />
                <feGaussianBlur stdDeviation="9.22727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109247"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109247"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_d_739_109247"
                x="41.8729"
                y="41.9881"
                width="150.878"
                height="158.698"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="5.27273" dy="5.27273" />
                <feGaussianBlur stdDeviation="9.22727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109247"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109247"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_d_739_109247"
                x="22.2088"
                y="22.3118"
                width="198.128"
                height="198.026"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="5.27273" dy="5.27273" />
                <feGaussianBlur stdDeviation="9.22727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109247"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109247"
                  result="shape"
                />
              </filter>
              <filter
                id="filter8_d_739_109247"
                x="2.52912"
                y="2.6673"
                width="237.487"
                height="237.349"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="5.27273" dy="5.27273" />
                <feGaussianBlur stdDeviation="9.22727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109247"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109247"
                  result="shape"
                />
              </filter>
              <filter
                id="filter9_i_739_109247"
                x="104.211"
                y="104.203"
                width="23.5938"
                height="28.866"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="5.27273" />
                <feGaussianBlur stdDeviation="2.63636" />
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
                  result="effect1_innerShadow_739_109247"
                />
              </filter>
              <linearGradient
                id="paint0_linear_739_109247"
                x1="102.733"
                y1="80.1191"
                x2="165.157"
                y2="150.407"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_739_109247"
                x1="105.428"
                y1="60.0844"
                x2="173.917"
                y2="178.11"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_739_109247"
                x1="106.65"
                y1="41.9951"
                x2="194.147"
                y2="203.229"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_739_109247"
                x1="104.366"
                y1="23.9373"
                x2="213.215"
                y2="224.525"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="296"
            height="296"
            viewBox="0 0 296 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:grid lg:hidden absolute right-0 md:self-center"
          >
            <g clipPath="url(#clip0_739_109239)">
              <rect width="296" height="296" rx="148" fill="#DFBF34" />
              <g filter="url(#filter0_i_739_109239)">
                <circle
                  cx="147.998"
                  cy="148"
                  r="121.205"
                  transform="rotate(30 147.998 148)"
                  stroke="#DFBF34"
                  strokeWidth="13.4545"
                />
              </g>
              <g filter="url(#filter1_i_739_109239)">
                <circle
                  cx="148"
                  cy="148.001"
                  r="96.1202"
                  transform="rotate(45 148 148.001)"
                  stroke="#DFBF34"
                  strokeWidth="13.4545"
                />
              </g>
              <g filter="url(#filter2_i_739_109239)">
                <path
                  d="M183.516 209.518C149.54 229.134 106.095 217.493 86.4793 183.517C66.8634 149.542 78.5044 106.097 112.48 86.481C146.456 66.8651 189.9 78.5061 209.516 112.482C229.132 146.458 217.491 189.902 183.516 209.518Z"
                  stroke="#DFBF34"
                  strokeWidth="13.4545"
                />
              </g>
              <g filter="url(#filter3_i_739_109239)">
                <circle
                  cx="147.994"
                  cy="148"
                  r="45.9507"
                  transform="rotate(90 147.994 148)"
                  stroke="#DFBF34"
                  strokeWidth="13.4545"
                />
              </g>
              <g filter="url(#filter4_f_739_109239)">
                <circle cx="147.999" cy="148" r="27.5932" fill="#F9F2D7" />
              </g>
              <g filter="url(#filter5_d_739_109239)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M149.751 100.23C149.08 97.3442 146.516 95.2493 143.564 95.5026C141.071 95.7164 138.564 96.1105 136.056 96.6944C107.72 103.291 90.0979 131.61 96.6948 159.945C103.292 188.28 131.61 205.903 159.945 199.306C188.281 192.709 205.903 164.391 199.306 136.055C198.38 132.074 197.024 128.304 195.299 124.783C194.096 122.327 191.301 121.177 188.637 121.798C184.157 122.841 182.217 128.256 184.031 132.482C184.934 134.586 185.665 136.799 186.202 139.106C191.114 160.205 177.993 181.29 156.895 186.202C135.796 191.114 114.711 177.992 109.799 156.894C104.887 135.796 118.008 114.71 139.107 109.798C140.356 109.508 141.605 109.28 142.851 109.114C147.209 108.531 150.749 104.513 149.751 100.23Z"
                  fill="url(#paint0_linear_739_109239)"
                />
              </g>
              <g filter="url(#filter6_d_739_109239)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M109.129 80.6548C119.745 74.5256 131.205 71.1841 142.663 70.4031C146.319 70.1538 149.262 73.1733 149.262 76.8383C149.262 80.6016 146.163 83.5948 142.413 83.9197C133.331 84.707 124.273 87.4475 115.856 92.3068C85.0979 110.065 74.5594 149.395 92.3176 180.153C110.076 210.911 149.406 221.45 180.164 203.692C189.65 198.215 197.213 190.687 202.615 181.991C204.769 178.524 209.374 177.219 212.758 179.5C215.52 181.361 216.5 184.998 214.796 187.859C208.22 198.9 198.812 208.462 186.891 215.344C149.698 236.817 102.139 224.074 80.6656 186.881C59.192 149.687 71.9354 102.128 109.129 80.6548Z"
                  fill="url(#paint1_linear_739_109239)"
                />
              </g>
              <g filter="url(#filter7_d_739_109239)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M230.158 101.414C227.95 103.563 227.473 106.911 228.793 109.695C244.525 142.881 238.663 183.755 211.206 211.211C176.296 246.121 119.696 246.121 84.7856 211.211C49.8755 176.301 49.8755 119.701 84.7856 84.7905C100.825 68.7511 121.443 60.0809 142.432 58.7801C146.174 58.5482 149.244 55.5499 149.244 51.8015C149.244 48.1211 146.281 45.1021 142.606 45.2938C118.109 46.5715 93.9827 56.5658 75.2718 75.2767C35.1073 115.441 35.1073 180.561 75.2718 220.725C115.436 260.889 180.556 260.889 220.72 220.725C252.567 188.878 259.162 141.34 240.505 102.995C238.567 99.0127 233.331 98.325 230.158 101.414Z"
                  fill="url(#paint2_linear_739_109239)"
                />
              </g>
              <g filter="url(#filter8_d_739_109239)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M148.002 26.7815C148.002 23.0631 144.983 20.0314 141.27 20.2305C99.5084 22.4695 59.6776 45.1156 37.2079 84.0344C1.8804 145.223 22.8453 223.465 84.0343 258.793C145.223 294.121 223.465 273.156 258.793 211.967C288.28 160.893 278.549 97.9385 238.942 57.9759C234.715 53.7108 227.87 56.9155 227.87 62.9205C227.87 64.8571 228.663 66.7057 230.016 68.092C264.923 103.882 273.368 159.812 247.141 205.239C215.529 259.993 145.515 278.753 90.7616 247.141C36.0078 215.529 17.2478 145.515 48.8599 90.7616C68.8419 56.1517 104.167 35.9232 141.283 33.7073C144.99 33.486 148.002 30.4951 148.002 26.7815Z"
                  fill="url(#paint3_linear_739_109239)"
                />
              </g>
              <g filter="url(#filter9_i_739_109239)">
                <circle cx="148.004" cy="148" r="15.0508" fill="#DFBF34" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_i_739_109239"
                x="20.0469"
                y="20.0464"
                width="255.906"
                height="260.953"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="5.04545" />
                <feGaussianBlur stdDeviation="8.40909" />
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
                  result="effect1_innerShadow_739_109239"
                />
              </filter>
              <filter
                id="filter1_i_739_109239"
                x="45.1562"
                y="45.1528"
                width="205.688"
                height="210.741"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="5.04545" />
                <feGaussianBlur stdDeviation="8.40909" />
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
                  result="effect1_innerShadow_739_109239"
                />
              </filter>
              <filter
                id="filter2_i_739_109239"
                x="70.2188"
                y="70.2236"
                width="155.555"
                height="160.597"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="5.04545" />
                <feGaussianBlur stdDeviation="8.40909" />
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
                  result="effect1_innerShadow_739_109239"
                />
              </filter>
              <filter
                id="filter3_i_739_109239"
                x="95.3125"
                y="95.3223"
                width="105.359"
                height="110.401"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="5.04545" />
                <feGaussianBlur stdDeviation="8.40909" />
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
                  result="effect1_innerShadow_739_109239"
                />
              </filter>
              <filter
                id="filter4_f_739_109239"
                x="95.179"
                y="95.1795"
                width="105.642"
                height="105.641"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="12.6136"
                  result="effect1_foregroundBlur_739_109239"
                />
              </filter>
              <filter
                id="filter5_d_739_109239"
                x="78.4943"
                y="78.6638"
                width="152.466"
                height="152.299"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6.72727" dy="6.72727" />
                <feGaussianBlur stdDeviation="11.7727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109239"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109239"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_d_739_109239"
                x="53.4162"
                y="53.5705"
                width="192.497"
                height="202.477"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6.72727" dy="6.72727" />
                <feGaussianBlur stdDeviation="11.7727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109239"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109239"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_d_739_109239"
                x="28.3303"
                y="28.467"
                width="252.786"
                height="252.654"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6.72727" dy="6.72727" />
                <feGaussianBlur stdDeviation="11.7727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109239"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109239"
                  result="shape"
                />
              </filter>
              <filter
                id="filter8_d_739_109239"
                x="3.22869"
                y="3.40301"
                width="302.997"
                height="302.824"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6.72727" dy="6.72727" />
                <feGaussianBlur stdDeviation="11.7727" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_109239"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_109239"
                  result="shape"
                />
              </filter>
              <filter
                id="filter9_i_739_109239"
                x="132.953"
                y="132.949"
                width="30.1016"
                height="36.8288"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="6.72727" />
                <feGaussianBlur stdDeviation="3.36364" />
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
                  result="effect1_innerShadow_739_109239"
                />
              </filter>
              <linearGradient
                id="paint0_linear_739_109239"
                x1="131.069"
                y1="102.221"
                x2="210.713"
                y2="191.898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_739_109239"
                x1="134.504"
                y1="76.6588"
                x2="221.887"
                y2="227.243"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_739_109239"
                x1="136.066"
                y1="53.5801"
                x2="247.7"
                y2="259.292"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_739_109239"
                x1="133.158"
                y1="30.5405"
                x2="272.035"
                y2="286.463"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <clipPath id="clip0_739_109239">
                <rect width="296" height="296" rx="148" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="482"
            height="482"
            viewBox="0 0 482 482"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:grid absolute right-0 lg:self-center"
          >
            <rect width="466" height="466" rx="233" fill="#DFBF34" />
            <g filter="url(#filter0_i_739_108803)">
              <circle
                cx="232.993"
                cy="233"
                r="190.839"
                transform="rotate(30 232.993 233)"
                stroke="#DFBF34"
                strokeWidth="21.1364"
              />
            </g>
            <g filter="url(#filter1_i_739_108803)">
              <circle
                cx="233.008"
                cy="233.001"
                r="151.347"
                transform="rotate(45 233.008 233.001)"
                stroke="#DFBF34"
                strokeWidth="21.1364"
              />
            </g>
            <g filter="url(#filter2_i_739_108803)">
              <circle
                cx="232.994"
                cy="232.999"
                r="111.856"
                transform="rotate(60 232.994 232.999)"
                stroke="#DFBF34"
                strokeWidth="21.1364"
              />
            </g>
            <g filter="url(#filter3_i_739_108803)">
              <circle
                cx="232.997"
                cy="233"
                r="72.364"
                transform="rotate(90 232.997 233)"
                stroke="#DFBF34"
                strokeWidth="21.1364"
              />
            </g>
            <g filter="url(#filter4_f_739_108803)">
              <circle cx="232.995" cy="233" r="43.4407" fill="#F9F2D7" />
            </g>
            <g filter="url(#filter5_d_739_108803)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M235.764 157.779C234.708 153.245 230.682 149.953 226.043 150.35C222.112 150.686 218.157 151.307 214.202 152.228C169.593 162.614 141.849 207.196 152.235 251.805C162.62 296.414 207.202 324.158 251.812 313.772C296.421 303.387 324.164 258.805 313.779 214.195C312.318 207.923 310.182 201.983 307.464 196.437C305.573 192.578 301.181 190.772 296.995 191.746C289.957 193.385 286.908 201.889 289.762 208.528C291.19 211.85 292.344 215.343 293.193 218.988C300.932 252.228 280.259 285.448 247.019 293.187C213.779 300.925 180.559 280.253 172.82 247.013C165.082 213.773 185.754 180.553 218.994 172.814C220.973 172.353 222.951 171.994 224.924 171.731C231.772 170.819 237.33 164.507 235.764 157.779Z"
                fill="url(#paint0_linear_739_108803)"
              />
            </g>
            <g filter="url(#filter6_d_739_108803)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M171.787 126.976C188.507 117.323 206.557 112.062 224.601 110.836C230.346 110.445 234.969 115.188 234.969 120.946C234.969 126.858 230.1 131.56 224.21 132.069C209.896 133.306 195.62 137.623 182.355 145.281C133.91 173.251 117.312 235.197 145.281 283.642C173.251 332.087 235.198 348.686 283.643 320.716C298.59 312.086 310.506 300.221 319.017 286.516C322.399 281.069 329.633 279.019 334.949 282.602C339.287 285.526 340.828 291.241 338.151 295.736C327.798 313.124 312.982 328.183 294.211 339.021C235.656 372.827 160.783 352.765 126.977 294.21C93.1704 235.656 113.233 160.783 171.787 126.976Z"
                fill="url(#paint1_linear_739_108803)"
              />
            </g>
            <g filter="url(#filter7_d_739_108803)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M362.367 159.644C358.898 163.02 358.15 168.28 360.224 172.653C385.013 224.919 375.785 289.301 332.539 332.547C277.562 387.524 188.425 387.524 133.448 332.547C78.4701 277.569 78.4701 188.433 133.448 133.455C158.718 108.186 191.204 94.5308 224.273 92.491C230.151 92.1284 234.975 87.418 234.975 81.5289C234.975 75.7476 230.321 71.0053 224.548 71.305C185.969 73.3077 147.969 89.0426 118.502 118.51C55.2702 181.742 55.2702 284.261 118.502 347.493C181.734 410.724 284.253 410.724 347.485 347.493C397.628 297.349 408.007 222.499 378.622 162.127C375.577 155.872 367.353 154.791 362.367 159.644Z"
                fill="url(#paint2_linear_739_108803)"
              />
            </g>
            <g filter="url(#filter8_d_739_108803)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M233 42.1415C233 36.2998 228.256 31.537 222.423 31.8495C156.674 35.372 93.9635 71.0247 58.5873 132.298C2.97038 228.629 35.976 351.808 132.307 407.425C228.639 463.042 351.817 430.036 407.434 333.705C453.87 253.276 438.528 154.132 376.13 91.2205C369.489 84.5243 358.737 89.5586 358.737 98.9899C358.737 102.033 359.985 104.938 362.111 107.115C417.122 163.472 430.443 251.58 389.129 323.137C339.349 409.359 229.098 438.9 142.876 389.12C56.6535 339.34 27.1117 229.088 76.892 142.866C108.36 88.3614 163.993 56.5064 222.446 53.0207C228.269 52.6735 233 47.975 233 42.1415Z"
                fill="url(#paint3_linear_739_108803)"
              />
            </g>
            <g filter="url(#filter9_i_739_108803)">
              <circle cx="233.007" cy="233" r="23.6949" fill="#DFBF34" />
            </g>
            <defs>
              <filter
                id="filter0_i_739_108803"
                x="31.5547"
                y="31.5593"
                width="402.883"
                height="410.807"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="7.92614" />
                <feGaussianBlur stdDeviation="13.2102" />
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
                  result="effect1_innerShadow_739_108803"
                />
              </filter>
              <filter
                id="filter1_i_739_108803"
                x="71.0938"
                y="71.0859"
                width="323.828"
                height="331.757"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="7.92614" />
                <feGaussianBlur stdDeviation="13.2102" />
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
                  result="effect1_innerShadow_739_108803"
                />
              </filter>
              <filter
                id="filter2_i_739_108803"
                x="110.547"
                y="110.554"
                width="244.891"
                height="252.815"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="7.92614" />
                <feGaussianBlur stdDeviation="13.2102" />
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
                  result="effect1_innerShadow_739_108803"
                />
              </filter>
              <filter
                id="filter3_i_739_108803"
                x="150.062"
                y="150.068"
                width="165.867"
                height="173.79"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="7.92614" />
                <feGaussianBlur stdDeviation="13.2102" />
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
                  result="effect1_innerShadow_739_108803"
                />
              </filter>
              <filter
                id="filter4_f_739_108803"
                x="149.924"
                y="149.928"
                width="166.144"
                height="166.143"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="19.8153"
                  result="effect1_foregroundBlur_739_108803"
                />
              </filter>
              <filter
                id="filter5_d_739_108803"
                x="123.634"
                y="123.897"
                width="239.884"
                height="239.611"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="10.5682" dy="10.5682" />
                <feGaussianBlur stdDeviation="18.4943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_108803"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_108803"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_d_739_108803"
                x="84.1342"
                y="84.3925"
                width="302.899"
                height="318.607"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="10.5682" dy="10.5682" />
                <feGaussianBlur stdDeviation="18.4943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_108803"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_108803"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_d_739_108803"
                x="44.6577"
                y="44.871"
                width="397.805"
                height="397.602"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="10.5682" dy="10.5682" />
                <feGaussianBlur stdDeviation="18.4943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_108803"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_108803"
                  result="shape"
                />
              </filter>
              <filter
                id="filter8_d_739_108803"
                x="5.14986"
                y="5.4145"
                width="476.86"
                height="476.584"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="10.5682" dy="10.5682" />
                <feGaussianBlur stdDeviation="18.4943" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.690196 0 0 0 0 0.580392 0 0 0 0 0.109804 0 0 0 0.62 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_739_108803"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_739_108803"
                  result="shape"
                />
              </filter>
              <filter
                id="filter9_i_739_108803"
                x="209.312"
                y="209.305"
                width="47.3906"
                height="57.9578"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <feOffset dy="10.5682" />
                <feGaussianBlur stdDeviation="5.28409" />
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
                  result="effect1_innerShadow_739_108803"
                />
              </filter>
              <linearGradient
                id="paint0_linear_739_108803"
                x1="206.35"
                y1="160.928"
                x2="331.736"
                y2="302.11"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_739_108803"
                x1="211.738"
                y1="120.684"
                x2="349.307"
                y2="357.756"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_739_108803"
                x1="214.212"
                y1="84.3504"
                x2="389.962"
                y2="408.209"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_739_108803"
                x1="209.645"
                y1="48.081"
                x2="428.281"
                y2="450.987"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="1" stopColor="#DFBF34" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-[24px] font-bold md:w-[395px] lg:w-[704px]">
            Welcome to the exclusive home of the world's premier Execution &
            Analytics assessment.
          </p>
        </div>
      </section>
      <section className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-28 grid gap-4">
          <p className="text-[18px] md:w-[400px]">
            Questions are divided into three categories: personal,
            interpersonal, and team.
          </p>
          <p className="text-[18px] md:w-[672px]">
            Your responses are never shared without your consent, so answer as
            candidly as possible for the opportunity to learn your current
            Execution & Analytics BRIDGER® score, gain insights for each
            category, and receive accurate next-level recommended actions.
          </p>
          <p className="text-[18px]">
            There are 39 questions and the experience should take about 12
            minutes.
          </p>
          <AppButton100
            className="bg-Yellow500 mt-10 md:mr-auto md:px-20"
            label="Start Assessment"
            onClick={() => navigate("../../assessment/execution/personal/01")}
          />
        </div>
      </section>
    </div>
  );
}
