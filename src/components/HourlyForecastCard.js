import "./HourlyForecastCard.css";
const HourlyForecastCard = ({ dt, temp, weather }) => {
  const hourSp = new Date(dt * 1000).toLocaleString("es-MX", {
    timeStyle: "short",
  });
  const tempRound = Math.round(temp);
  return (
    <>
      <div className="hourly-card">
        {hourSp}
        <div className="hourly-card__temp">
          <img
            loading="lazy"
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt=""
          />
          <p>{tempRound}°</p>
        </div>
      </div>
    </>
  );
};

export default HourlyForecastCard;
