import { useContext } from "react";
import { CurrentWeatherContext } from "../context/CurrentWeatherProvider";
import "./InfoWeather.css";
import WeatherCardMain from "./WeatherCardMain";
import WeatherCardDescr from "./WeatherCardDescr";
import WeatherCardFooter from "./WeatherCardFooter";
const InfoWeather = () => {
  const { currentWeather, isLoadingCurrentWeather } = useContext(
    CurrentWeatherContext
  );
  const { dt, main, name, weather, wind } = currentWeather;
  const temp = weather && weather[0];
  const kmPerHour = (wind?.speed * 3.6).toFixed(2);
  const dateSpanish = new Date(dt * 1000).toLocaleString("es-MX", {
    timeStyle: "short",
  });
  return (
    <div className="container">
      <>
        <div className="container__weather">
          <WeatherCardMain
            main={main}
            temp={temp}
            isLoading={isLoadingCurrentWeather}
          />
          <WeatherCardDescr
            main={main}
            kmPerHrc={kmPerHour}
            isLoading={isLoadingCurrentWeather}
          />
        </div>
        <WeatherCardFooter
          name={name}
          dateSpanish={dateSpanish}
          isLoading={isLoadingCurrentWeather}
        />
      </>
    </div>
  );
};

export default InfoWeather;
