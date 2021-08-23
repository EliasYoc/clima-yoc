import { createContext, useEffect, useState } from "react";
import getWeatherOfMyLocation from "../features/getWeatherOfMyLocation";

const initialForm = {
  city: "",
};
export const CurrentWeatherContext = createContext();

const CurrentWeatherProvider = ({ children }) => {
  const [searchForm, setSearchForm] = useState(initialForm);
  const [currentWeather, setCurrentWeather] = useState({});
  const [oneCall, setOneCall] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const optionsCurrentWeather = {
          path: "weather",
          lat: latitude,
          long: longitude,
          setWeather: setCurrentWeather,
          setErrorMsg,
        };
        getWeatherOfMyLocation(optionsCurrentWeather);
        const optionesOneCall = {
          ...optionsCurrentWeather,
          path: "onecall",
          setWeather: setOneCall,
          exclude: "minutely",
        };
        getWeatherOfMyLocation(optionesOneCall);
      });
    }
  }, []);
  const data = {
    searchForm,
    setSearchForm,
    errorMsg,
    currentWeather,
    oneCall,
  };

  return (
    <CurrentWeatherContext.Provider value={data}>
      {children}
    </CurrentWeatherContext.Provider>
  );
};

export default CurrentWeatherProvider;
