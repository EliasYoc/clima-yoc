import { useContext } from "react";
import { CurrentWeatherContext } from "../context/CurrentWeatherProvider";
import "./WeatherFormSearch.css";
const WeatherFormSearch = () => {
  const { searchForm, setSearchForm } = useContext(CurrentWeatherContext);
  const handleChange = (e) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  };
  return (
    <form className="weather-search">
      <input
        onChange={handleChange}
        name="city"
        type="text"
        placeholder="Ingresa la ciudad"
        value={searchForm.city}
      />
      <button>Buscar</button>
    </form>
  );
};

export default WeatherFormSearch;
