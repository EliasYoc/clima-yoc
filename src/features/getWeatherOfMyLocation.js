const key = "d1d8cbf725f40ad7d35f0ba266119c6a";

const getWeatherOfMyLocation = async ({
  path,
  lat,
  long,
  setWeather,
  setErrorMsg,
  exclude = "",
  setIsLoading,
  name = undefined,
  setNewCoords = undefined,
}) => {
  try {
    setErrorMsg(null);
    setIsLoading(true);
    const ifIsNameDeleteLonLat = `${
      name && path === "weather" ? `q=${name}` : `lat=${lat}&lon=${long}`
    }`;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/${path}?${ifIsNameDeleteLonLat}${
        exclude ? `&exclude=${exclude}` : ""
      }&appid=${key}&units=metric&lang=sp`
    );
    const data = await res.json();
    setIsLoading(false);
    if (!res.ok) throw data;
    setWeather(data);
    if (setNewCoords)
      setNewCoords({ lat: data.coord.lat, lon: data.coord.lon });
    // console.log(path, data);
    // console.log(exclude);
  } catch (err) {
    setIsLoading(false);
    let msg = `Error ${err.cod}: ${err.message}`;
    setErrorMsg(msg);
  }
};
export default getWeatherOfMyLocation;
