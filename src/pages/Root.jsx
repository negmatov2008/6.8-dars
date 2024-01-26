import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Content from "../components/Content";

function Root() {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
}

export default Root;
