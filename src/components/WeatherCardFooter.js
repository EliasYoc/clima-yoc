import { HiOutlineLocationMarker } from "react-icons/hi";
import "./WeatherCardFooter.css";
const WeatherCardFooter = ({ dateSpanish, name }) => {
  return (
    <article className="wrap weather__footer">
      <p>
        Ultima actualización: <small>{dateSpanish}</small>
      </p>
      <p>
        {name}{" "}
        <span>
          <HiOutlineLocationMarker />
        </span>
      </p>
    </article>
  );
};

export default WeatherCardFooter;
