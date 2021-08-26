import WeatherFormSearch from "./WeatherFormSearch";
import "./WeatherCurrent.css";
import InfoWeather from "./InfoWeather";
import { useContext } from "react";
import { CurrentWeatherContext } from "../context/CurrentWeatherProvider";
const WeatherCurrent = () => {
  const { errorMsg } = useContext(CurrentWeatherContext);

  return (
    <section className="current-info">
      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        <>
          <WeatherFormSearch />
          <InfoWeather />
        </>
      )}
    </section>
  );
};

export default WeatherCurrent;
