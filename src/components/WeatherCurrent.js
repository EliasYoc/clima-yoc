import WeatherFormSearch from "./WeatherFormSearch";
import "./WeatherCurrent.css";
import InfoWeather from "./InfoWeather";
const WeatherCurrent = () => {
  return (
    <section className="current-info">
      <WeatherFormSearch />
      <InfoWeather />
    </section>
  );
};

export default WeatherCurrent;
