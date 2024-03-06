import React from "react";
import { Outlet } from "react-router-dom";
import ExecutionNav from "./ExecutionNav";
import OverviewFooter from "../overviewLayout/OverviewFooter";

export default function ExecutionLayout() {
  return (
    <div className="h-full lg:grid">
      <ExecutionNav />
      <div className="mt-[76px]">
        <Outlet />
      </div>
      <OverviewFooter />
    </div>
  );
}
