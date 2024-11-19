import React from "react";
import { useNavigate } from "react-router-dom";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-black text-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out
                     border-2 border-gray-300 dark:border-gray-700
                     hover:border-purple-500 dark:hover:border-fuchsia-500
                     hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4 text-black dark:text-wh">{children}</div>;
}

export function CardHeader({ children, navigateTo }) {
  const navigate = useNavigate();
  const str = navigateTo.split("#");
  function navigateToLearn() {
    navigate(navigateTo);
  }

  return (
    <div className="relative px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      {children}
      <button
        className="absolute top-3 right-3 px-3 py-1 bg-purple-600 dark:bg-fuchsia-600 text-white rounded hover:bg-purple-700 dark:hover:bg-fuchsia-700 transition-colors duration-300"
        onClick={navigateToLearn}
      >
        <a href={`#${str[1]}`}>Read More</a>
      </button>
    </div>
  );
}

export function CardTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
      {children}
    </h2>
  );
}
