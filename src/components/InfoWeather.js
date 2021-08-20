import { useContext } from "react";
import { CurrentWeatherContext } from "../context/CurrentWeatherProvider";
import "./InfoWeather.css";
const InfoWeather = () => {
  const { currentWeather } = useContext(CurrentWeatherContext);
  console.log(currentWeather);
  return <div className="weather"></div>;
};

export default InfoWeather;
