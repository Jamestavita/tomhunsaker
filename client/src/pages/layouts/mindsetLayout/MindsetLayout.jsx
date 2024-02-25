import React from "react";
import { Outlet } from "react-router-dom";
import MindsetNav from "./MindsetNav";
import OverviewFooter from "../overviewLayout/OverviewFooter";

export default function MindsetLayout() {
  return (
    <div className="h-full lg:grid">
      <MindsetNav />
      <div className="mt-[76px]">
        <Outlet />
      </div>
      <OverviewFooter />
    </div>
  );
}
