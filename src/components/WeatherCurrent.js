import WeatherFormSearch from "./WeatherFormSearch";
import "./WeatherCurrent.css";
import InfoWeather from "./InfoWeather";
const WeatherCurrent = () => {
  return (
    <article className="current-info">
      <WeatherFormSearch />
      <InfoWeather />
    </article>
  );
};

export default WeatherCurrent;
