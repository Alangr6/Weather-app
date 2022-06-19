import React, { useState } from "react";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const API_KEY = "83466769170e3aae1a511f940e229f8d";

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${query}&appid=${API_KEY}`;

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(API_URL)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

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

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="city">
              <div className="weather">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="city">
              <div className="temperature">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};
