import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import EolicEnergi from "./EolicEnergi";
import "./WeatherCardDescr.css";
const WeatherCardDescr = ({ kmPerHrc, main }) => {
  return (
    <article className="wrap weather__description">
      <div className="info__humidity">
        <p className="title-weather">
          <strong>
            <WiHumidity className="icon-desc" /> Humedad:
          </strong>
          {main.humidity}%
        </p>
      </div>
      <div className="info__wind">
        <p className="title-weather">
          <strong>
            <BiWind className="icon-desc" />
            Viento
          </strong>
        </p>
        <section className="miniwrapper">
          <EolicEnergi />
          <EolicEnergi className="behind" />
          <div className="descr-wind">
            <p>{kmPerHrc} km/h</p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default WeatherCardDescr;
