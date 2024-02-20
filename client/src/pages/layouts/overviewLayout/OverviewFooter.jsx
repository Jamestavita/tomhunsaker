import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function OverviewFooter() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#111111] text-white lg:z-[3]">
      <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12 md:flex md:justify-between md:items-center justify-items-center">
        <svg
          width="73"
          height="49"
          viewBox="0 0 73 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate("/")}
        >
          <path
            d="M19.0371 45.7718H15.4576V7.81754H0.00390625V4.6084H34.4908V7.81754H19.0371V45.7718Z"
            fill="#FAF9F9"
          />
          <path
            d="M72.8153 45.7718H62.2005V29.2324H45.1056V45.7718H34.4908V4.6084H45.1056V19.9753H62.2005V4.6084H72.8153V45.7718Z"
            fill="#FAF9F9"
          />
        </svg>
        <div className="gap-5 text-sm grid justify-items-center md:flex">
          <NavLink to="../policy" className="">
            Privacy Policy
          </NavLink>
          <NavLink to="../terms" className="">
            Terms & Conditions
          </NavLink>
          <p className="">&copy; Copyright 2024 Tom Hunsaker</p>
        </div>
      </div>
    </div>
  );
}
