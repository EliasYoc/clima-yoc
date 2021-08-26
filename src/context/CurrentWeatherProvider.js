import { createContext, useEffect, useState } from "react";
import getWeatherOfMyLocation from "../features/getWeatherOfMyLocation";

export const initialSearchForm = {
  city: "",
};
export const CurrentWeatherContext = createContext();

const CurrentWeatherProvider = ({ children }) => {
  const [searchForm, setSearchForm] = useState(initialSearchForm);
  const [currentWeather, setCurrentWeather] = useState({});
  const [oneCall, setOneCall] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoadingCurrentWeather, setIsLoadingCurrentWeather] = useState(true);
  const [isLoadingForecast, setIsLoadingForecast] = useState(true);
  const [byCityName, setByCityName] = useState("");
  const [newCoords, setNewCoords] = useState(null);
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
          name: byCityName,
          setNewCoords,
        };
        getWeatherOfMyLocation(optionsCurrentWeather);
      });
    }
  }, [byCityName]);
  useEffect(() => {
    const optionesOneCall = {
      path: "onecall",
      lat: newCoords?.lat,
      long: newCoords?.lon,
      setWeather: setOneCall,
      setErrorMsg,
      exclude: "minutely",
      setIsLoading: setIsLoadingForecast,
    };
    if (newCoords) getWeatherOfMyLocation(optionesOneCall);
  }, [newCoords]);
  const data = {
    searchForm,
    setSearchForm,
    errorMsg,
    currentWeather,
    oneCall,
    isLoadingCurrentWeather,
    isLoadingForecast,
    setByCityName,
  };

  return (
    <CurrentWeatherContext.Provider value={data}>
      {children}
    </CurrentWeatherContext.Provider>
  );
};

export default CurrentWeatherProvider;
