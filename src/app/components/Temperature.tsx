"use client";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Temperature = () => {
  const weather = useContext(WeatherContext);

  if (!weather || weather.temperature === null) {
    return <div className="text-4xl">جاري التحميل...</div>;
  }

  return (
    <div className="text-8xl font-black tracking-tight">
      {Math.round(weather.temperature)}°
    </div>
  );
};

export default Temperature;
