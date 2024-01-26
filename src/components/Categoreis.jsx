import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const categore = [
  {
    logo: "vite.svg",
    text: "Chrome",
    id: 1,
    here: true,
    router: "chrome",
  },
  {
    logo: "instagram.png",
    text: "Instagram",
    id: 2,
    here: true,
    router: "insta",
  },
  {
    logo: "uzum.webp",
    text: "Uzum Market",
    id: 3,
    here: true,
    router: "uzum",
  },
  {
    logo: "tailwind.png",
    text: "Install Tailwind",
    id: 4,
    here: true,
    router: "tailwind",
  },
];
function Categoreis() {
  function handleClick(id) {
    const oneData = categore.find((data) => data.id == id);
    oneData.here = false;
  }
  return (
    <div className="pl-2 pr-3  flex">
      {categore.map((data) => (
        <NavLink
          className={`${
            data.here ? "" : "hidden"
          } p-3 pt-1 rounded-t-xl   flex  w-[200px] relative items-center mr-3`}
          to={data.router}
        >
          <img className="w-[18px] mr-2" src={data.logo} alt="" />
          <span className="font-thin text-[14px]">{data.text}</span>
          <button
            onClick={() => {
              handleClick(data.id);
            }}
            className="absolute p-[3px]  rounded-[50%] right-[4px] hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </button>
        </NavLink>
      ))}
    </div>
  );
}

export default Categoreis;
