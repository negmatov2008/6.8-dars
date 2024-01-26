import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Content;
