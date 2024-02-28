import React from "react";
import { Outlet } from "react-router-dom";
import InnovationNav from "./InnovationNav";
import OverviewFooter from "../overviewLayout/OverviewFooter";

export default function InnovationLayout() {
  return (
    <div className="h-full lg:grid">
      <InnovationNav />
      <div className="mt-[76px]">
        <Outlet />
      </div>
      <OverviewFooter />
    </div>
  );
}
