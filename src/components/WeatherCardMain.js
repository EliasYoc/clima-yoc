import "./WeatherCardMain.css";
const WeatherCardMain = ({ main, temp }) => {
  return (
    <article className="wrap weather__temp">
      <img
        src={`http://openweathermap.org/img/wn/${temp.icon}@2x.png`}
        alt=""
      />
      <h2 className="temp">{Math.round(main?.temp)}°</h2>
      <p>
        {Math.round(main?.temp_min)}°/{Math.round(main?.temp_max)}°
      </p>
      <p>{temp.description}</p>
    </article>
  );
};

export default WeatherCardMain;
