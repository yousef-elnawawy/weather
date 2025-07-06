"use client";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Title = () => {
  const weather = useContext(WeatherContext);

  return (
    <div className="flex justify-between items-center text-white mb-4">
      <h2 className="text-3xl font-bold">القاهرة</h2>
      <h4 className="text-lg">
        {weather ? weather.localtime : "جاري التحميل..."}
      </h4>
    </div>
  );
};

export default Title;
