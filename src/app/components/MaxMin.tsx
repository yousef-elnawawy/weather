"use client";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const MaxMin = () => {
  const weather = useContext(WeatherContext);

  if (!weather) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className="flex justify-between text-lg border-t border-white/20 pt-4">
      <div>
        <p className="opacity-70">العظمى</p>
        <p className="font-bold">{Math.round(weather.maxTemp ?? 0)}°</p>
      </div>
      <div>
        <p className="opacity-70">الصغرى</p>
        <p className="font-bold">{Math.round(weather.minTemp ?? 0)}°</p>
      </div>
    </div>
  );
};

export default MaxMin;
