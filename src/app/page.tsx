"use client";
import Title from "./components/Title";
import Temperature from "./components/Temperature";
import WeatherState from "./components/WeatherState";
import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";

const Home = () => {
  const weather = useContext(WeatherContext);
  if (!weather) {
    return <div className="text-white">Loading...</div>;
  }else{
  return (
    <div className="bg-gradient-to-b from-[#1782ca] to-[#0a5e9a] p-7 rounded-3xl shadow-xl text-white w-[360px] text-center space-y-6 border border-[#0b5793] transition duration-300 cursor-pointer">
      <Title />
      <Temperature />
      <WeatherState />
    </div>
  );
  }
};

export default Home;
