import { useState, useEffect } from 'react';
import './country.css';
import {
  useParams
} from "react-router-dom";

export default function Country() {
    const [weatherData, setWeatherData] = useState({});
    const [mainData, setMainData] = useState({});
    let { country } = useParams();
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=794ee95e63c5a32aaf88cd813fa2e425`)
      .then(response => response.json())
      .then(data => {
          setWeatherData(data.weather[0]);
          setMainData(data.main);
          console.log(weatherData);
          console.log(mainData);
      });
  }, []);
    return (
        <div className="body">
            <div className="weather-card">
                {weatherData && mainData ?<div className="weather-country">{country}</div>:<div className="country-weather">Loading...</div>} 
                 <div className="country-weather">{weatherData.main}</div>
                <div className="country-weather-desc">{weatherData.description}</div>
                <div className="country-weather-desc">{"Temperature: "+ (parseInt(mainData.temp)-273.0) + " C"}</div>
                <div className="country-weather-desc">{"Feels Like: "+ (parseInt(mainData.feels_like)-273.0) + " C"}</div>
                <div className="country-weather-desc">{"Pressure: "+parseFloat(mainData.pressure)}</div>
                <div className="country-weather-desc">{"Humidity: "+parseFloat(mainData.humidity)}</div>
            </div>
        </div>
    );
}