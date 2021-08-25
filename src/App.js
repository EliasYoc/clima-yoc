import "./App.css";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import WeatherCurrent from "./components/WeatherCurrent";
import CurrentWeatherProvider from "./context/CurrentWeatherProvider";

function App() {
  return (
    <div className="App">
      <CurrentWeatherProvider>
        <div className="container-center">
          <WeatherCurrent />
          <HourlyForecast />
          <DailyForecast />
        </div>
      </CurrentWeatherProvider>
    </div>
  );
}

export default App;
