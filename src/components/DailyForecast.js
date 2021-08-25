import { useContext } from "react";
import { CurrentWeatherContext } from "../context/CurrentWeatherProvider";
import "./DailyForecast.css";
import DaylistForecastCard from "./DaylistForecastCard";
const DailyForecast = () => {
  const {
    oneCall: { daily },
  } = useContext(CurrentWeatherContext);
  if (!daily) return null;
  console.log(daily);
  return (
    <section className="current-info daily">
      <article className="daily-forecast">
        <h3>Pronóstico 7 dias</h3>
        <ul className="dayli-forecast__list">
          {daily.map((forecast) => (
            <DaylistForecastCard key={forecast.dt} dailyForecast={forecast} />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default DailyForecast;
