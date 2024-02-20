import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import OverviewNav from "./OverviewNav";
import OverviewFooter from "./OverviewFooter";

export default function OverviewLayout() {
  return (
    <div className="h-full lg:grid">
      <OverviewNav />
      <div className="mt-[56px]">
        <Outlet />
      </div>
      <OverviewFooter />
    </div>
  );
}
