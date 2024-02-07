import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#111111] text-white">
      <div className="w-[min(90rem,100%)]  mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.2fr_1fr] gap-12 md:justify-between">
        <div className="">
          <svg
            width="73"
            height="49"
            viewBox="0 0 73 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
          <div className="gap-5 text-xs hidden md:grid md:grid-cols-2 mt-5 lg:hidden">
            <p className="col-span-2">
              &copy; Copyright {new Date().getFullYear()} Tom Hunsaker
            </p>
            <NavLink to="terms" className="">
              Terms & Conditions
            </NavLink>
            <NavLink to="policy" className="">
              Privacy Policy
            </NavLink>
          </div>
        </div>
        <div className="flex gap-[72px] items-start md:gap-0 md:justify-between ">
          <div className="grid gap-8">
            <NavLink to="expertise" className="font-medium">
              Expertise
            </NavLink>
            <div className="grid gap-8 md:grid-cols-2">
              <NavLink to="about" className="">
                About Dr Tom
              </NavLink>
              <NavLink to="speaking" className="">
                Speaking
              </NavLink>
              <NavLink to="advisory" className="">
                Advisory
              </NavLink>
              <NavLink to="library" className="">
                Library
              </NavLink>
            </div>
          </div>
          <div className="grid gap-8 font-medium">
            <NavLink to="concepts" className="">
              Concepts
            </NavLink>
            <NavLink to="affiliate" className="">
              Affiliate
            </NavLink>
            <NavLink to="stay_updated" className="">
              Stay Updated
            </NavLink>
          </div>
        </div>
        <div className="grid gap-8 text-xs md:hidden lg:grid lg:justify-self-end lg:self-start">
          <NavLink to="terms" className="">
            Terms & Conditions
          </NavLink>
          <NavLink to="policy" className="">
            Privacy Policy
          </NavLink>
          <p>&copy; Copyright {new Date().getFullYear()} Tom Hunsaker</p>
        </div>
      </div>
    </div>
  );
}
