import { useContext } from "react";
import {
  CurrentWeatherContext,
  initialSearchForm,
} from "../context/CurrentWeatherProvider";
import "./WeatherFormSearch.css";
const WeatherFormSearch = () => {
  const { searchForm, setSearchForm, setByCityName } = useContext(
    CurrentWeatherContext
  );
  const handleChange = (e) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setByCityName(searchForm.city);
    setSearchForm(initialSearchForm);
    // console.log({ ...searchForm });
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
      <button onClick={handleSearch}>Buscar</button>
    </form>
  );
};

export default WeatherFormSearch;
