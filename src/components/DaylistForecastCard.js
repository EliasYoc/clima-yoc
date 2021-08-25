import "./DaylistForecastCard.css";
const DaylistForecastCard = ({ dailyForecast }) => {
  const { dt, weather } = dailyForecast;
  const spanishDate = new Date(dt * 1000).toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
  });
  let tempRounded = {};
  for (const key in dailyForecast.temp) {
    tempRounded[key] = Math.round(dailyForecast.temp[key]);
  }
  console.log(dailyForecast.temp);
  console.log(tempRounded);
  const { day, min, max } = tempRounded;
  const { icon, description } = weather[0];
  return (
    <li className="wrap daily-forecast__card">
      <span className="card__date">{spanishDate}</span>
      <div className="card__info">
        <div className="info__temp">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
          <p className="temp__celcius">
            <strong>{day}°C </strong>
            <span>
              {min}/{max}
            </span>
          </p>
        </div>
        <div className="info__weather">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default DaylistForecastCard;
