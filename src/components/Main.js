import React, { useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");

  const API_KEY = "83466769170e3aae1a511f940e229f8d";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getUTCDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
     navigator.geolocation.getCurrentPosition(savePositionToState);

    const res = await axios.get(API_URL);
    setTemperature(res.data.main.temp);
    setCityName(res.data.name);
    setWeather(res.data.weather[0].main);
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  if (cityName === "Globe") {
    return <h1 className="city">LOADING...</h1>;
  } else
    return (
      <div>
        <div className="city">
          <div>
            <h1>Weather of {cityName}</h1>

            <h2 className="date">{dateBuilder(new Date())}</h2>
            <h1 className="temperature">{Math.round(temperature)}°C</h1>

            <h5 className="weather">{weather}</h5>
          </div>

         
        </div>
      </div>
    );
};
