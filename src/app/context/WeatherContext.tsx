"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

type WeatherContextType = {
  temperature: number | null;
  weatherState: string | null;
  maxTemp: number | null;
  minTemp: number | null;
  localtime: string | null;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherState, setWeatherState] = useState<string | null>(null);
  const [maxTemp, setMaxTemp] = useState<number | null>(null);
  const [minTemp, setMinTemp] = useState<number | null>(null);
  const [localtime, setLocaltime] = useState<string | null>(null);

  useEffect(() => {
    // هنا بنجيب المدينة من ipapi
    axios.get("https://ipapi.co/json/")
      .then((response) => {
        const city = response.data.city;

        // بعد ما عرفنا المدينة، نطلب الطقس بتاعها
        axios
          .get(
            `https://api.weatherapi.com/v1/current.json?key=c89f3b902dae44c2a55162358250607&q=${city}&lang=ar`
          )
          .then((res) => {
            setTemperature(res.data.current.temp_c);
            setWeatherState(res.data.current.condition.text);
            setMaxTemp(res.data.current.temp_c);
            setMinTemp(res.data.current.temp_c);
            setLocaltime(res.data.location.localtime);
          })
          .catch((err) => console.error("مشكلة في جلب بيانات الطقس:", err));
      })
      .catch((err) => console.error("مشكلة في تحديد المدينة:", err));
  }, []);

  return (
    <WeatherContext.Provider
      value={{ temperature, weatherState, maxTemp, minTemp, localtime }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
