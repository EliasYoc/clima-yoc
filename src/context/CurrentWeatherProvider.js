import { createContext, useEffect, useState } from "react";

const initialForm = {
  city: "",
};
export const CurrentWeatherContext = createContext();

const CurrentWeatherProvider = ({ children }) => {
  const [searchForm, setSearchForm] = useState(initialForm);
  const [currentWeather, setCurrentWeather] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        getWeatherOfMyLocation(latitude, longitude);
      });
    }
    const getWeatherOfMyLocation = async (lat, long) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${"d1d8cbf725f40ad7d35f0ba266119c6a"}&units=metric&lang=sp`
        );
        const data = await res.json();
        if (!res.ok) throw data;
        setCurrentWeather(data);
        console.log("data ", data);
      } catch (err) {
        let msg = `Error ${err.cod}: ${err.message}`;
        setErrorMsg(msg);
      }
    };
  }, []);
  const data = { searchForm, setSearchForm, errorMsg, currentWeather };

  return (
    <CurrentWeatherContext.Provider value={data}>
      {children}
    </CurrentWeatherContext.Provider>
  );
};

export default CurrentWeatherProvider;
