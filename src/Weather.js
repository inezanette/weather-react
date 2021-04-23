import React from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 90,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
  return (
    <div className="Weather">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city.."
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <img src={weatherData.imgURL} className="condition" alt="weather" />
      <div className="data">
        <span className="temperature">
          <strong>{weatherData.temperature}</strong>
        </span>
        <span className="units">
          {" "}
          <a href="/">°F</a> |<a href="/">°C </a>{" "}
        </span>
      </div>
      <div className="col-12">
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
          <li></li>
          <li>
            {weatherData.humidity}% <span> </span>%
          </li>
          <li>
            {weatherData.wind}km/h<span> </span> km/h
          </li>
        </ul>
      </div>
      <img
        src="https://media.giphy.com/media/RR1IUBBFi4clq/giphy.gif"
        alt="alice sunny day"
        className="alice"
      />
      <hr />
    </div>
  );
}
