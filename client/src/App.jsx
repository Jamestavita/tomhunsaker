import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/other pages/About";
import Home from "./pages/home/Home";
import Layout from "./pages/layouts/appLayout/Layout";
import Speaking from "./pages/other pages/Speaking";
import Advisory from "./pages/other pages/Advisory";
import Library from "./pages/other pages/Library";
import Concepts from "./pages/concepts/Concepts";
import Mindset from "./pages/concepts/Mindset";
import Strategy from "./pages/concepts/Strategy";
import Execution from "./pages/concepts/Execution";
import Innovation from "./pages/concepts/Innovation";
import Affiliate from "./pages/other pages/Affiliate";
import StayUpdated from "./pages/other pages/StayUpdated";
import MindsetLayout from "./pages/layouts/mindsetLayout/MindsetLayout";
import OneToTen from "./pages/assessments/mindset/OneToTen";
import OverviewLayout from "./pages/layouts/overviewLayout/OverviewLayout";
import ElevenToTwenty from "./pages/assessments/strategy/ElevenToTwenty";
import StrategyLayout from "./pages/layouts/strategyLayout/StrategyLayout";
import StrategyOverview from "./pages/assessments/overviews/StrategyOverview";
import MindsetOverview from "./pages/assessments/overviews/MindsetOverview";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/speaking" element={<Speaking />}></Route>
          <Route path="/advisory" element={<Advisory />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/affiliate" element={<Affiliate />}></Route>
          <Route path="/stay_updated" element={<StayUpdated />}></Route>
          <Route path="/concepts" element={<Concepts />}>
            <Route index element={<Mindset />}></Route>
            <Route path="strategy" element={<Strategy />}></Route>
            <Route path="innovation" element={<Innovation />}></Route>
            <Route path="execution" element={<Execution />}></Route>
          </Route>
        </Route>
        <Route path="/overview" element={<OverviewLayout />}>
          <Route path="mindset" element={<MindsetOverview />}></Route>
          <Route path="strategy" element={<StrategyOverview />}></Route>
          {/* <Route path="innovation" element={<MindsetOverview />}></Route> */}
          {/* <Route path="execution" element={<MindsetOverview />}></Route> */}
        </Route>
        <Route
          path="/assessment/mindset/:assessment_number"
          element={<MindsetLayout />}
        >
          <Route index element={<OneToTen />}></Route>
        </Route>
        <Route
          path="/assessment/strategy/:assessment_number"
          element={<StrategyLayout />}
        >
          <Route index element={<ElevenToTwenty />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
