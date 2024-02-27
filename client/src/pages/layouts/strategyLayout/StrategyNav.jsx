import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStrategyAssessmentProgress } from "../../../store/features/appSlice";

export default function StrategyNav() {
  const dispatch = useDispatch();
  const { number_personal, number_team, number_org, number_pr } = useParams();
  const { strategy_assessment_progress } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(
      setStrategyAssessmentProgress(
        (+number_personal || +number_team || +number_org || +number_pr) * 2.564
      )
    );
  }, [number_personal, number_team, number_org, number_pr]);

  return (
    <div className="fixed top-0 w-full z-40 bg-Greyscale">
      <div className="grid md:flex items-center w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 py-4 justify-center md:justify-between">
        <NavLink to="/" className="grid justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="136"
            height="14"
            viewBox="0 0 136 14"
            fill="none"
          >
            <path
              d="M5.468 13.204H4.424V2.134H0.5V1.198H9.392V2.134H5.468V13.204Z"
              fill="#111111"
            />
            <path
              d="M16.3788 13.42C14.6388 13.42 13.2288 12.832 12.1488 11.656C11.0808 10.48 10.5468 8.998 10.5468 7.21C10.5468 5.422 11.0808 3.94 12.1488 2.764C13.2288 1.588 14.6388 1 16.3788 1C18.1068 1 19.5108 1.588 20.5908 2.764C21.6708 3.94 22.2108 5.422 22.2108 7.21C22.2108 8.998 21.6708 10.48 20.5908 11.656C19.5108 12.832 18.1068 13.42 16.3788 13.42ZM16.3788 12.484C17.7948 12.484 18.9408 11.992 19.8168 11.008C20.6928 10.012 21.1308 8.746 21.1308 7.21C21.1308 5.662 20.6928 4.396 19.8168 3.412C18.9528 2.428 17.8068 1.936 16.3788 1.936C14.9388 1.936 13.7868 2.428 12.9228 3.412C12.0588 4.396 11.6268 5.662 11.6268 7.21C11.6268 8.746 12.0588 10.012 12.9228 11.008C13.7868 11.992 14.9388 12.484 16.3788 12.484Z"
              fill="#111111"
            />
            <path
              d="M35.9749 13.204H34.9309V2.602L30.5569 13.204H30.1609L25.7689 2.602V13.204H24.7429V1.198H26.2729L30.3589 11.098L34.4269 1.198H35.9749V13.204Z"
              fill="#111111"
            />
            <path
              d="M49.7276 13.204H46.6316V8.38H41.6456V13.204H38.5496V1.198H41.6456V5.68H46.6316V1.198H49.7276V13.204Z"
              fill="#111111"
            />
            <path
              d="M57.5794 13.42C55.7074 13.42 54.2914 12.958 53.3314 12.034C52.3714 11.11 51.8914 9.88 51.8914 8.344V1.198H55.0414V8.236C55.0414 8.968 55.2574 9.562 55.6894 10.018C56.1334 10.462 56.7634 10.684 57.5794 10.684C58.3834 10.684 59.0014 10.462 59.4334 10.018C59.8774 9.562 60.0994 8.968 60.0994 8.236V1.198H63.2314V8.326C63.2314 9.874 62.7514 11.11 61.7914 12.034C60.8434 12.958 59.4394 13.42 57.5794 13.42Z"
              fill="#111111"
            />
            <path
              d="M76.5514 13.204H73.5634L68.4874 6.256V13.204H65.3914V1.198H68.5774L73.4374 7.804V1.198H76.5514V13.204Z"
              fill="#111111"
            />
            <path
              d="M83.1796 13.42C80.9596 13.42 79.1836 12.784 77.8516 11.512L79.4896 9.19C80.5456 10.246 81.8236 10.774 83.3236 10.774C83.8516 10.774 84.2656 10.684 84.5656 10.504C84.8776 10.312 85.0336 10.072 85.0336 9.784C85.0336 9.532 84.8656 9.328 84.5296 9.172C84.1936 9.004 83.7736 8.884 83.2696 8.812C82.7656 8.728 82.2196 8.602 81.6316 8.434C81.0436 8.254 80.4976 8.05 79.9936 7.822C79.4896 7.582 79.0696 7.204 78.7336 6.688C78.3976 6.172 78.2296 5.554 78.2296 4.834C78.2296 3.778 78.6556 2.878 79.5076 2.134C80.3716 1.39 81.5416 1.018 83.0176 1.018C84.9736 1.018 86.5996 1.576 87.8956 2.692L86.2036 4.906C85.1956 4.078 84.0256 3.664 82.6936 3.664C81.8296 3.664 81.3976 3.952 81.3976 4.528C81.3976 4.756 81.5656 4.954 81.9016 5.122C82.2376 5.278 82.6576 5.398 83.1616 5.482C83.6656 5.566 84.2056 5.698 84.7816 5.878C85.3696 6.046 85.9156 6.25 86.4196 6.49C86.9236 6.73 87.3436 7.102 87.6796 7.606C88.0156 8.11 88.1836 8.71 88.1836 9.406C88.1836 10.63 87.7456 11.608 86.8696 12.34C85.9936 13.06 84.7636 13.42 83.1796 13.42Z"
              fill="#111111"
            />
            <path
              d="M101.12 13.204H97.6099L97.0159 11.476H92.2819L91.6879 13.204H88.1779L92.6959 1.198H96.5839L101.12 13.204ZM96.1699 8.776L94.6399 4.258L93.1099 8.776H96.1699Z"
              fill="#111111"
            />
            <path
              d="M112.861 13.204H109.063L105.913 8.686L105.103 9.694V13.204H102.007V1.198H105.103V6.13L108.793 1.198H112.609L107.947 6.814L112.861 13.204Z"
              fill="#111111"
            />
            <path
              d="M122.586 13.204H113.784V1.198H122.586V3.898H116.88V5.77H122.46V8.47H116.88V10.504H122.586V13.204Z"
              fill="#111111"
            />
            <path
              d="M134.626 13.204H131.08L129.064 9.172H127.48V13.204H124.384V1.198H130.396C131.692 1.198 132.712 1.576 133.456 2.332C134.2 3.088 134.572 4.042 134.572 5.194C134.572 6.154 134.332 6.94 133.852 7.552C133.384 8.152 132.826 8.566 132.178 8.794L134.626 13.204ZM129.928 6.472C130.348 6.472 130.702 6.358 130.99 6.13C131.278 5.902 131.422 5.584 131.422 5.176C131.422 4.78 131.278 4.468 130.99 4.24C130.702 4.012 130.348 3.898 129.928 3.898H127.48V6.472H129.928Z"
              fill="#111111"
            />
          </svg>
        </NavLink>
        <p className="md:text-xl text-Greyscale700 font-bold mt-2">
          Strategy & Change Assessment
        </p>
      </div>
      <div className="bg-[#F8F8F8] grid h-2 overflow-x-hidden">
        <div
          style={{
            width: strategy_assessment_progress + "%",
          }}
          className="bg-Green500 transition-all"
        ></div>
      </div>
    </div>
  );
}
