import "./App.css";
import HourlyForecast from "./components/HourlyForecast";
import WeatherCurrent from "./components/WeatherCurrent";
import CurrentWeatherProvider from "./context/CurrentWeatherProvider";

function App() {
  return (
    <div className="App">
      <CurrentWeatherProvider>
        <WeatherCurrent />
        <HourlyForecast />
      </CurrentWeatherProvider>
    </div>
  );
}

export default App;
