import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(false);
    setMobileMenuShown(false);
  }, [pathname]);
  
  function matchRoute(route) {
    if (pathname === route) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="fixed z-40 top-0 bg-Greyscale w-full">
      <div className="flex items-center w-[min(90rem,100%)] mx-auto relative z-40 justify-between bg-Greyscale px-4 md:px-12 lg:px-32 py-4">
        <svg
          width="135"
          height="13"
          viewBox="0 0 135 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
          onClick={() => navigate("/")}
        >
          <path
            d="M4.968 12.204H3.924V1.134H0V0.198H8.892V1.134H4.968V12.204Z"
            fill="#111111"
          />
          <path
            d="M15.8788 12.42C14.1388 12.42 12.7288 11.832 11.6488 10.656C10.5808 9.48 10.0468 7.998 10.0468 6.21C10.0468 4.422 10.5808 2.94 11.6488 1.764C12.7288 0.588 14.1388 0 15.8788 0C17.6068 0 19.0108 0.588 20.0908 1.764C21.1708 2.94 21.7108 4.422 21.7108 6.21C21.7108 7.998 21.1708 9.48 20.0908 10.656C19.0108 11.832 17.6068 12.42 15.8788 12.42ZM15.8788 11.484C17.2948 11.484 18.4408 10.992 19.3168 10.008C20.1928 9.012 20.6308 7.746 20.6308 6.21C20.6308 4.662 20.1928 3.396 19.3168 2.412C18.4528 1.428 17.3068 0.936 15.8788 0.936C14.4388 0.936 13.2868 1.428 12.4228 2.412C11.5588 3.396 11.1268 4.662 11.1268 6.21C11.1268 7.746 11.5588 9.012 12.4228 10.008C13.2868 10.992 14.4388 11.484 15.8788 11.484Z"
            fill="#111111"
          />
          <path
            d="M35.4749 12.204H34.4309V1.602L30.0569 12.204H29.6609L25.2689 1.602V12.204H24.2429V0.198H25.7729L29.8589 10.098L33.9269 0.198H35.4749V12.204Z"
            fill="#111111"
          />
          <path
            d="M49.2276 12.204H46.1316V7.38H41.1456V12.204H38.0496V0.198H41.1456V4.68H46.1316V0.198H49.2276V12.204Z"
            fill="#111111"
          />
          <path
            d="M57.0794 12.42C55.2074 12.42 53.7914 11.958 52.8314 11.034C51.8714 10.11 51.3914 8.88 51.3914 7.344V0.198H54.5414V7.236C54.5414 7.968 54.7574 8.562 55.1894 9.018C55.6334 9.462 56.2634 9.684 57.0794 9.684C57.8834 9.684 58.5014 9.462 58.9334 9.018C59.3774 8.562 59.5994 7.968 59.5994 7.236V0.198H62.7314V7.326C62.7314 8.874 62.2514 10.11 61.2914 11.034C60.3434 11.958 58.9394 12.42 57.0794 12.42Z"
            fill="#111111"
          />
          <path
            d="M76.0514 12.204H73.0634L67.9874 5.256V12.204H64.8914V0.198H68.0774L72.9374 6.804V0.198H76.0514V12.204Z"
            fill="#111111"
          />
          <path
            d="M82.6796 12.42C80.4596 12.42 78.6836 11.784 77.3516 10.512L78.9896 8.19C80.0456 9.246 81.3236 9.774 82.8236 9.774C83.3516 9.774 83.7656 9.684 84.0656 9.504C84.3776 9.312 84.5336 9.072 84.5336 8.784C84.5336 8.532 84.3656 8.328 84.0296 8.172C83.6936 8.004 83.2736 7.884 82.7696 7.812C82.2656 7.728 81.7196 7.602 81.1316 7.434C80.5436 7.254 79.9976 7.05 79.4936 6.822C78.9896 6.582 78.5696 6.204 78.2336 5.688C77.8976 5.172 77.7296 4.554 77.7296 3.834C77.7296 2.778 78.1556 1.878 79.0076 1.134C79.8716 0.39 81.0416 0.0179998 82.5176 0.0179998C84.4736 0.0179998 86.0996 0.576 87.3956 1.692L85.7036 3.906C84.6956 3.078 83.5256 2.664 82.1936 2.664C81.3296 2.664 80.8976 2.952 80.8976 3.528C80.8976 3.756 81.0656 3.954 81.4016 4.122C81.7376 4.278 82.1576 4.398 82.6616 4.482C83.1656 4.566 83.7056 4.698 84.2816 4.878C84.8696 5.046 85.4156 5.25 85.9196 5.49C86.4236 5.73 86.8436 6.102 87.1796 6.606C87.5156 7.11 87.6836 7.71 87.6836 8.406C87.6836 9.63 87.2456 10.608 86.3696 11.34C85.4936 12.06 84.2636 12.42 82.6796 12.42Z"
            fill="#111111"
          />
          <path
            d="M100.62 12.204H97.1099L96.5159 10.476H91.7819L91.1879 12.204H87.6779L92.1959 0.198H96.0839L100.62 12.204ZM95.6699 7.776L94.1399 3.258L92.6099 7.776H95.6699Z"
            fill="#111111"
          />
          <path
            d="M112.361 12.204H108.563L105.413 7.686L104.603 8.694V12.204H101.507V0.198H104.603V5.13L108.293 0.198H112.109L107.447 5.814L112.361 12.204Z"
            fill="#111111"
          />
          <path
            d="M122.086 12.204H113.284V0.198H122.086V2.898H116.38V4.77H121.96V7.47H116.38V9.504H122.086V12.204Z"
            fill="#111111"
          />
          <path
            d="M134.126 12.204H130.58L128.564 8.172H126.98V12.204H123.884V0.198H129.896C131.192 0.198 132.212 0.576 132.956 1.332C133.7 2.088 134.072 3.042 134.072 4.194C134.072 5.154 133.832 5.94 133.352 6.552C132.884 7.152 132.326 7.566 131.678 7.794L134.126 12.204ZM129.428 5.472C129.848 5.472 130.202 5.358 130.49 5.13C130.778 4.902 130.922 4.584 130.922 4.176C130.922 3.78 130.778 3.468 130.49 3.24C130.202 3.012 129.848 2.898 129.428 2.898H126.98V5.472H129.428Z"
            fill="#111111"
          />
        </svg>
        <div className="md:flex lg:gap-12 md:gap-5 hidden">
          <div className="px-3 py-2">
            <input
              type="checkbox"
              id="expertise1"
              className="hidden peer/accordion"
              checked={isChecked}
              onChange={() => setIsChecked(true)}
            />
            <label
              htmlFor="expertise1"
              className="flex items-center cursor-pointer peer-checked/accordion:[&>*:last-child]:rotate-[180deg] text-Dark"
            >
              <p className="text-[18px]">Expertise</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all"
              >
                <path
                  d="M8.46875 4.71289L14.1816 10.3965C14.4453 10.6895 14.4453 11.1289 14.1816 11.3926L13.5078 12.0664C13.2441 12.3301 12.8047 12.3301 12.5117 12.0664L8 7.55469L3.45898 12.0664C3.16602 12.3301 2.72656 12.3301 2.46289 12.0664L1.78906 11.3926C1.52539 11.1289 1.52539 10.6895 1.78906 10.3965L7.50195 4.71289C7.76562 4.44922 8.20508 4.44922 8.46875 4.71289Z"
                  fill="#262626"
                  fillOpacity="0.6"
                />
              </svg>
            </label>
            <div className="grid grid-rows-[0] overflow-hidden peer-checked/accordion:grid-rows-1 rounded-br-md rounded-bl-md fixed bg-Greyscale">
              <div className="grid pt-4">
                <NavLink
                  to="about"
                  className={`p-3 ${
                    matchRoute("/about") && "font-bold bg-Greyscale200"
                  }`}
                >
                  About Dr Tom
                </NavLink>
                <NavLink
                  to="speaking"
                  className={`p-3 ${
                    matchRoute("/speaking") && "font-bold bg-Greyscale200"
                  }`}
                >
                  Speaking
                </NavLink>
                <NavLink
                  to="advisory"
                  className={`p-3 ${
                    matchRoute("/advisory") && "font-bold bg-Greyscale200"
                  }`}
                >
                  Advisory
                </NavLink>
                <NavLink
                  to="library"
                  className={`p-3 ${
                    matchRoute("/library") && "font-bold bg-Greyscale200"
                  }`}
                >
                  Library
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink
            to="concepts"
            className={`px-3 py-2 text-[18px] ${
              matchRoute("/concepts") && "font-bold"
            }`}
          >
            Concepts
          </NavLink>
          <NavLink
            to="affiliate"
            className={`px-3 py-2 text-[18px] ${
              matchRoute("/affiliate") && "font-bold"
            }`}
          >
            Affiliate
          </NavLink>
          <NavLink
            to="stay_updated"
            className={`px-3 py-2 text-[18px] ${
              matchRoute("/stay_updated") && "font-bold"
            }`}
          >
            Stay Updated
          </NavLink>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuShown(!mobileMenuShown)}
        >
          {!mobileMenuShown ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#1C1C1C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`absolute top-[56px] left-0 w-full h-screen bg-Greyscale md:hidden text-xl [transition:0.9s_ease] z-30 border-t-2 ${
          !mobileMenuShown ? "-translate-y-[200%]" : "translate-y-[0]"
        }`}
      >
        <div className="grid self-start md:px-12">
          <div className="py-4">
            <input
              type="checkbox"
              id="expertise2"
              defaultChecked={true}
              className="hidden peer/accordion"
            />
            <label
              htmlFor="expertise2"
              className="grid grid-cols-[1fr_1.5fr] items-center cursor-pointer peer-checked/accordion:[&>*:last-child]:rotate-[180deg] text-Dark"
            >
              <p className="font-semibold text-xl px-4">Expertise</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all"
              >
                <path
                  d="M8.46875 4.71289L14.1816 10.3965C14.4453 10.6895 14.4453 11.1289 14.1816 11.3926L13.5078 12.0664C13.2441 12.3301 12.8047 12.3301 12.5117 12.0664L8 7.55469L3.45898 12.0664C3.16602 12.3301 2.72656 12.3301 2.46289 12.0664L1.78906 11.3926C1.52539 11.1289 1.52539 10.6895 1.78906 10.3965L7.50195 4.71289C7.76562 4.44922 8.20508 4.44922 8.46875 4.71289Z"
                  fill="#262626"
                  fillOpacity="0.6"
                />
              </svg>
            </label>
            <div className="grid grid-rows-[0] overflow-hidden peer-checked/accordion:grid-rows-1">
              <div className="grid text-base">
                <NavLink
                  to="about"
                  className={`px-8 py-2 ${
                    matchRoute("/about") && "font-bold bg-Greyscale200"
                  }`}
                >
                  About Dr Tom
                </NavLink>
                <NavLink
                  to="speaking"
                  className={`px-8 py-2 ${
                    matchRoute("/speaking") && "font-bold bg-Greyscale200"
                  }`}
                >
                  Speaking
                </NavLink>
                <NavLink
                  to="advisory"
                  className={`px-8 py-2 ${
                    matchRoute("/advisory") && "font-bold bg-Greyscale200"
                  }`}
                >
                  Advisory
                </NavLink>
                <NavLink
                  to="library"
                  className={`px-8 py-2 ${
                    matchRoute("/library") && "font-bold bg-Greyscale200"
                  }`}
                >
                  Library
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink
            to="concepts"
            className={`text-xl font-semibold p-4 ${
              matchRoute("/concepts") && "bg-Greyscale200"
            }`}
          >
            Concepts
          </NavLink>
          <NavLink
            to="affiliate"
            className={`text-xl font-semibold p-4 ${
              matchRoute("/affiliate") && "bg-Greyscale200"
            }`}
          >
            Affiliate
          </NavLink>
          <NavLink
            to="stay_updated"
            className={`text-xl font-semibold p-4 ${
              matchRoute("/stay_updated") && "bg-Greyscale200"
            }`}
          >
            Stay Updated
          </NavLink>
        </div>
      </div>
    </div>
  );
}
