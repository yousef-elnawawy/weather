"use client";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherState = () => {
  const weather = useContext(WeatherContext);

  if (!weather || !weather.weatherState) {
    return <div className="text-2xl">جاري التحميل...</div>;
  }

  // ماب بين الحالة والإيموجي
const weatherIcons: { [key: string]: string } = {
  "مشمس": "☀️",
  "صافي": "☀️",
  "غائم جزئياً": "⛅",
  "غائم": "☁️",
  "ممطر": "🌧️",
  "عاصف": "💨",
  "ضباب": "🌫️",
  "ثلوج": "❄️",
  "أمطار رعدية": "⛈️",
};


  // نجيب الإيموجي المناسب أو إيموجي افتراضي
  const icon = weatherIcons[weather.weatherState] || "🌡️";

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="text-6xl">{icon}</div>
      <p className="text-2xl font-medium">{weather.weatherState}</p>
    </div>
  );
};

export default WeatherState;
