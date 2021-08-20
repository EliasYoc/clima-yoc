import "./App.css";
import WeatherCurrent from "./components/WeatherCurrent";
import CurrentWeatherProvider from "./context/CurrentWeatherProvider";

function App() {
  return (
    <div className="App">
      <CurrentWeatherProvider>
        <WeatherCurrent />
      </CurrentWeatherProvider>
    </div>
  );
}

export default App;
