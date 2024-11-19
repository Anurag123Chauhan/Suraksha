"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import ParticleCanvas from "./particles";
import ScrollDown from "./scrollDown";
import Data from "./disaters.json";

export default function SmallerNeonBackgroundGrid() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Slice the data to get only the first 6 items
  const displayedData = Data.slice(0, 6);

  return (
    <div
      className="flex items-center flex-col relative min-h-screen overflow-hidden bg-gray-900"
      id="id_learn"
    >
      <ParticleCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255,0,255,0.3), transparent 70%)`,
        }}
      />
      <div className="container mx-auto p-4 relative">
        <h1 className="text-6xl mt-16 font-bold mb-10 text-center text-white">
          Learn About Disasters and Safety
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayedData.map((disaster, index) => (
            <Card
              key={index}
              className="bg-black text-white shadow-lg h-96 overflow-hidden"
            >
              <CardHeader navigateTo={`/learn#${disaster.title}`}>
                <CardTitle>{disaster.title}</CardTitle>
              </CardHeader>
              <CardContent className="overflow-y-auto h-64">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ScrollDown id="about" />
    </div>
  );
}
