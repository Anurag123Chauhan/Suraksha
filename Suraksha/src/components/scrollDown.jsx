import React from "react";
import "./landing.css";

export default function ScrollDown({ id }) {
  return (
    <div className="absolute bottom-10 text-center animate-bounce z-10">
      <a href={`#${id}`} className="text-white text-sm">
        Scroll Down
      </a>
      <svg
        className="w-6 h-6 mx-auto mt-2 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  );
}
