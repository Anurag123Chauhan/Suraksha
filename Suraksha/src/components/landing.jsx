import React from "react";
import ParticleCanvas from "./particles";
import Header from "./header";
import "./landing.css";
import Learn from "./learn";
import ScrollDown from "./scrollDown";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  function navigateToLern() {
    navigate("/learn");
  }
  return (
    <>
      <Header />
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden "
      >
        <ParticleCanvas />
        <div className="absolute inset-0 opacity-70"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-7xl font-bold mb-4 animate-fade-in">
            Welcome to Suraksha
          </h1>
          <p className="mt-4 text-lg animate-fade-in">
            Helping others when every second counts
          </p>
        </div>
        <div className="relative mt-8 text-center z-10">
          <button
            className="bg-white text-blue-700 py-2 px-4 rounded-lg shadow-lg animate-remove-bg"
            onClick={navigateToLern}
          >
            Learn More
          </button>
        </div>
        <ScrollDown id={"id_learn"} />
      </section>
      <Learn />
      <section
        id="about"
        className="relative h-screen flex flex-col items-center justify-center  text-gray-800 dark:bg-background_color dark:text-white"
      >
        <ParticleCanvas />
        <div className="absolute inset-0 opacity-70"></div>
        <div className="relative text-center text-white z-10">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">About Us</h2>
          <p className="mt-4 text-lg animate-fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            ligula in nunc
          </p>
        </div>
      </section>
    </>
  );
}
