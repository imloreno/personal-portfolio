import React from "react";
import { useState } from "react";
import WeatherSvg from "./WeatherSvg";

const THEMES = {
  afternoon: {
    main: "#42062b",
    bga: "#e6b58c",
    bgb: "#8f4c67",
    fronta: "#a3185d",
    frontb: "#ff7f7c",
    moun1a: "#a30f5d",
    moun1b: "#42062b",
    moun2a: "#a06e45",
    moun2b: "#4f0142",
    sun: true,
    moon: false,
    rain: false,
    cloud: false,
  },
  night: {
    main: "#100e30",
    bga: "#5f67f7",
    bgb: "#312470",
    fronta: "#2e1b54",
    frontb: "#3f4bcf",
    moun1a: "#502f93",
    moun1b: "#22063d",
    moun2a: "#4443ba",
    moun2b: "#0c0941",
    sun: false,
    moon: true,
    rain: false,
    cloud: true,
  },
  day: {
    main: "#1b5d79",
    bga: "#6ac7b3",
    bgb: "#1b5d79",
    fronta: "#10b57d",
    frontb: "#10b57d",
    moun1a: "#98f37d",
    moun1b: "#0a7a5d",
    moun2a: "#67cc91",
    moun2b: "#226e51",
    sun: true,
    moon: false,
    rain: false,
    cloud: false,
  },
  "day-storm": {
    main: "#384c5c",
    bga: "#bad4cb",
    bgb: "#497d7a",
    fronta: "#486b69",
    frontb: "#5a807e",
    moun1a: "#385c59",
    moun1b: "#e6fffa",
    moun2a: "#65a6a4",
    moun2b: "#e6e6e6",
    sun: true,
    moon: false,
    rain: true,
    cloud: true,
  },
  "night-storm": {
    main: "#283142",
    bga: "#bad4cb",
    bgb: "#293858",
    fronta: "#48516b",
    frontb: "#3b515f",
    moun1a: "#384e5c",
    moun1b: "#768e9c",
    moun2a: "#6597a6",
    moun2b: "#abb2b9",
    sun: false,
    moon: false,
    rain: true,
    cloud: true,
  },
};

const WeatherInterface = ({ theme }) => {
  const [targetTheme, setTargetTheme] = useState("night");

  return (
    <div
      className="weather"
      style={{ "--bg-weather": THEMES[targetTheme].main || THEMES["day"].bgb }} //modify main variable
    >
      <div className="weather-draw">
        <WeatherSvg theme={THEMES[targetTheme]} />
        <div className="weather-content">
          <p>24°</p>
        </div>
      </div>
      <div className="weather-assets">
        <p>Aquí viene la segunda sección</p>
      </div>
    </div>
  );
};

export default WeatherInterface;
