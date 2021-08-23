import { HiOutlineLocationMarker } from "react-icons/hi";
import "./WeatherCardFooter.css";
const WeatherCardFooter = ({ dateSpanish, name }) => {
  return (
    <article className="wrap weather__footer">
      <p>
        {name}{" "}
        <span>
          <HiOutlineLocationMarker />
        </span>
      </p>
      <p>Ultima actualización: {dateSpanish}</p>
    </article>
  );
};

export default WeatherCardFooter;
