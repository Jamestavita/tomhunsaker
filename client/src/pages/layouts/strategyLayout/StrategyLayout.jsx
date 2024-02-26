import React from "react";
import { Outlet } from "react-router-dom";
import StrategyNav from "./StrategyNav";
import OverviewFooter from "../overviewLayout/OverviewFooter";

export default function StrategyLayout() {
  return (
    <div className="h-full lg:grid">
      <StrategyNav />
      <div className="mt-[76px]">
        <Outlet />
      </div>
      <OverviewFooter />
    </div>
  );
}
