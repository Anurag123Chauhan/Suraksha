import React from "react";
import Header from "./header";
import Data from "./disaters.json";
import "./landing.css";

export default function LearnAboutDis() {
  return (
    <>
      <Header />
      <div className="container mt-20 mx-auto p-4">
        <h1 className="text-4xl mt-20 font-bold mb-8 text-center text-gray-800 dark:text-white">
          Learn About Disasters
        </h1>
        {Data.map((disaster, index) => (
          <div
            key={index}
            id={disaster.title}
            className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-lift"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              {disaster.title}
            </h2>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
                About
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {disaster.content.about}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Precautions
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {disaster.content.precautions.map((precaution, i) => (
                  <li key={i}>{precaution}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Emergency Kit
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {disaster.content.emergency_kit.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Important Contact Numbers
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {disaster.content.contact_numbers.map((number, i) => (
                  <li key={i}>{number}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
