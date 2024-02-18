import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/other pages/About";
import Home from "./pages/home/Home";
import Layout from "./pages/layouts/layout1/Layout";
import Speaking from "./pages/other pages/Speaking";
import Advisory from "./pages/other pages/Advisory";
import Library from "./pages/other pages/Library";
import Concepts from "./pages/concepts/Concepts";
import Mindset from "./pages/concepts/Mindset";
import Strategy from "./pages/concepts/Strategy";
import Execution from "./pages/concepts/Execution";
import Innovation from "./pages/concepts/Innovation";

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
          <Route path="/concepts" element={<Concepts />}>
            <Route index element={<Mindset />}></Route>
            <Route path="strategy" element={<Strategy />}></Route>
            <Route path="innovation" element={<Innovation />}></Route>
            <Route path="execution" element={<Execution />}></Route>
          </Route>
        </Route>
        {/* <Route path="/get_started" element={<Layout_Two />}>
          <Route index element={<Get_Started />}></Route>
          <Route path=":assessmentIndex" element={<ThreeToTwentyOne />}></Route>
        </Route> */}
      </Routes>
    </div>
  );
}
