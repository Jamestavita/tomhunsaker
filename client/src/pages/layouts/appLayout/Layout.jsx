import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="h-full grid">
      <Nav />
      <div className="mt-[56px] lg:mt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
