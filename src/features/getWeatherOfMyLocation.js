const getWeatherOfMyLocation = async ({
  path,
  lat,
  long,
  setWeather,
  setErrorMsg,
  exclude = "",
  setIsLoading,
}) => {
  try {
    setErrorMsg(null);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/${path}?lat=${lat}&lon=${long}${
        exclude ? `&exclude=${exclude}` : ""
      }&appid=${"d1d8cbf725f40ad7d35f0ba266119c6a"}&units=metric&lang=sp`
    );
    const data = await res.json();
    setIsLoading(false);
    if (!res.ok) throw data;
    setWeather(data);
    // console.log(path, data);
    // console.log(exclude);
  } catch (err) {
    setIsLoading(false);
    let msg = `Error ${err.cod}: ${err.message}`;
    setErrorMsg(msg);
  }
};
export default getWeatherOfMyLocation;
