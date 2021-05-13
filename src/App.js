import React from 'react';
import Weather from "./Weather";
import './Weather.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
      <footer>
        This project was coded by inezanette and is {""}
        <a href="https://github.com/inezanette/weather-react"
        target="_blank" rel="link"
        >Open sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}


