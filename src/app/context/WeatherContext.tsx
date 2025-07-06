"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

type WeatherContextType = {
  temperature: number | null;
  weatherState: string | null;
  maxTemp: number | null;
  minTemp: number | null;
  localtime: string | null; // 👈 أضف السطر ده
};


// 2- إنشاء الكونتكست
export const WeatherContext = createContext<WeatherContextType | null>(null);

// 3- Provider
export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherState, setWeatherState] = useState<string | null>(null);
  const [maxTemp, setMaxTemp] = useState<number | null>(null);
  const [minTemp, setMinTemp] = useState<number | null>(null);
  const [localtime, setLocaltime] = useState<string | null>(null);


  useEffect(() => {
    axios
      .get(
"https://api.weatherapi.com/v1/current.json?key=c89f3b902dae44c2a55162358250607&q=Cairo&lang=ar"
  )
      .then((res) => {
        setTemperature(res.data.current.temp_c);
        setWeatherState(res.data.current.condition.text);
        // WeatherAPI current API معندوش max/min, فممكن نحطهم بقيمة temp_c ك placeholder لو هتستخدم current بس
        setMaxTemp(res.data.current.temp_c);
        setMinTemp(res.data.current.temp_c);
          setLocaltime(res.data.location.localtime); // 👈 هنا
      })
      .catch((err) => console.error(err));
  }, []);

  return (
<WeatherContext.Provider
  value={{ temperature, weatherState, maxTemp, minTemp, localtime }}
>
  {children}
</WeatherContext.Provider>

  );
};
