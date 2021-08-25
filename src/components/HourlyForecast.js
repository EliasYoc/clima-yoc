import { useContext } from "react";
import { CurrentWeatherContext } from "../context/CurrentWeatherProvider";
import "./HourlyForecast.css";
import HourlyForecastCard from "./HourlyForecastCard";
const HourlyForecast = () => {
  const {
    oneCall: { hourly },
    isLoadingForecast,
  } = useContext(CurrentWeatherContext);
  const cardsLoading = Array(6).fill("");
  console.log(cardsLoading);
  return (
    <>
      {isLoadingForecast ? (
        <section className="current-info hourly">
          <article className="cards-list">
            {cardsLoading.map((loading, i) => (
              <div key={i} className="hourly-card skeleton"></div>
            ))}
          </article>
        </section>
      ) : (
        <section className="current-info hourly">
          <article className="cards-list">
            {hourly?.map((el) => (
              <HourlyForecastCard
                key={el.dt}
                dt={el.dt}
                temp={el.temp}
                weather={el.weather[0]}
              />
            ))}
          </article>
          <svg
            className="wave-animation one"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff77"
              fillOpacity="1"
              d="M0,320L24,272C48,224,96,128,144,117.3C192,107,240,181,288,208C336,235,384,213,432,197.3C480,181,528,171,576,181.3C624,192,672,224,720,208C768,192,816,128,864,112C912,96,960,128,1008,170.7C1056,213,1104,267,1152,277.3C1200,288,1248,256,1296,250.7C1344,245,1392,267,1416,277.3L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="wave-animation two"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,320L24,272C48,224,96,128,144,117.3C192,107,240,181,288,208C336,235,384,213,432,197.3C480,181,528,171,576,181.3C624,192,672,224,720,208C768,192,816,128,864,112C912,96,960,128,1008,170.7C1056,213,1104,267,1152,277.3C1200,288,1248,256,1296,250.7C1344,245,1392,267,1416,277.3L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>

          <svg
            className="wave-animation tree"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff77"
              fillOpacity="1"
              d="M0,320L24,272C48,224,96,128,144,117.3C192,107,240,181,288,208C336,235,384,213,432,197.3C480,181,528,171,576,181.3C624,192,672,224,720,208C768,192,816,128,864,112C912,96,960,128,1008,170.7C1056,213,1104,267,1152,277.3C1200,288,1248,256,1296,250.7C1344,245,1392,267,1416,277.3L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
        </section>
      )}
    </>
  );
};

export default HourlyForecast;
