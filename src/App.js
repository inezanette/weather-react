import logo from './logo.svg';
import React from 'react';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Weather />
       
      </header>
      <footer>
        This project was coded by inezanette and is {""}
        <a href="https://github.com/inezanette/weather-react"
        target="_blank"
        >Open sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
