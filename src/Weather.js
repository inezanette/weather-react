import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
export default function Weather() {
  const [weatherData, setWeatherData]= useState({ready: false});
  function handleResponse(response){
    setWeatherData({
      ready: true,
      city:response.data.name,
      temperature:response.data.main.temp,
      date: new Date(response.data.dt *1000),
      description:response.data.weather[0].description,
      imgURL:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity:response.data.main.humidty,
      wind:response.data.wind.speed,
    });
  }
  if (weatherData.ready){
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
            <strong>{Math.round(weatherData.temperature)}</strong>
          </span>
          <span className="units">
            {" "}
            <a href="/">°F</a> |<a href="/">°C </a>{" "}
          </span>
        </div>
        <div className="col-12">
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
              </li>
            <li>{weatherData.description}</li>
            <li></li>
            <li>
              {Math.round(weatherData.humidity)}% <span> </span>
            </li>
            <li>
              {Math.round(weatherData.wind)}km/h<span> </span>
            </li>
          </ul>
        </div>
        <img
          src="https://media.giphy.com/media/RR1IUBBFi4clq/giphy.gif"
          alt="alice sunny day"
          className="alice"
        />
        <hr />
        <footer><small>
          This project was coded by inezanette and is {""}
          <a href="https://github.com/inezanette/weather-react"
          target="_blank"
          >Open sourced on GitHub</a>
          </small>
        </footer>
      </div>
    );
  }else{
    let city="New York";
    const apiKey= "85bac114d52449ee9cc4314d6d2a3f87";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
