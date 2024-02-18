import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Concepts() {
  const { pathname } = useLocation();

  function matchRoute(route) {
    if (pathname === route) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="grid">
      <div className="w-[min(90rem,100%)] mx-auto flex md:grid md:grid-cols-4 gap-1 md:gap-5 px-4 md:px-12 lg:px-[128px] pt-4 mt-1 overflow-x-scroll scroll-smooth text-Greyscale900 [-ms-overflow-style:none] [scrollbar-width:none] [::-webkit-scrollbar{display:none}]">
        <NavLink
          to="/concepts"
          className={`min-w-[135px] md:w-[unset] py-2 px-5 border-x border-t border-Greyscale500 transition-all ${
            matchRoute("/concepts") && "bg-Greyscale200 font-bold"
          } rounded-t-[20px]`}
        >
          <p className="">MindSet & Culture</p>
        </NavLink>
        <NavLink
          to="strategy"
          className={`min-w-[135px] md:w-[unset] py-2 px-5 border-x border-t border-Greyscale500 transition-all ${
            matchRoute("/concepts/strategy") && "bg-Greyscale200 font-bold"
          } rounded-t-[20px]`}
        >
          <p className="">Strategy & Change</p>
        </NavLink>
        <NavLink
          to="innovation"
          className={`min-w-[135px] md:w-[unset] py-2 px-5 border-x border-t border-Greyscale500 transition-all ${
            matchRoute("/concepts/innovation") && "bg-Greyscale200 font-bold"
          } rounded-t-[20px]`}
        >
          <p className="">Innovation & Analytics</p>
        </NavLink>
        <NavLink
          to="execution"
          className={`min-w-[135px] md:w-[unset] py-2 px-5 border-x border-t border-Greyscale500 transition-all ${
            matchRoute("/concepts/execution") && "bg-Greyscale200 font-bold"
          } rounded-t-[20px]`}
        >
          <p className="">Execution & Agility</p>
        </NavLink>
      </div>
      <div className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
