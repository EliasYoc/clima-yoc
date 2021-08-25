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
  const [isLoadingCurrentWeather, setIsLoadingCurrentWeather] = useState(true);
  const [isLoadingForecast, setIsLoadingForecast] = useState(true);
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
          setIsLoading: setIsLoadingCurrentWeather,
        };
        getWeatherOfMyLocation(optionsCurrentWeather);
        const optionesOneCall = {
          ...optionsCurrentWeather,
          path: "onecall",
          setWeather: setOneCall,
          exclude: "minutely",
          setIsLoading: setIsLoadingForecast,
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
    isLoadingCurrentWeather,
    isLoadingForecast,
  };

  return (
    <CurrentWeatherContext.Provider value={data}>
      {children}
    </CurrentWeatherContext.Provider>
  );
};

export default CurrentWeatherProvider;
