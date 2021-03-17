import React, { useState } from 'react';
import './Weather.css';

const axios = require('axios');
const OPEN_WEATHER_MAP_API_KEY = '854bd4455249d79ab3b98653353ab63e';
const OPEN_WEATHER_MAP_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
const DEV_MODE = true;

export function Weather() {

    //Reduce overusing API during development and exceeding usage threshold
    const [weather, setWeather] = useState({
            temperature: !DEV_MODE ? undefined : 20,
            humidity: !DEV_MODE ? undefined : 67,
            windSpeed: !DEV_MODE ? undefined : 3,
            icon: !DEV_MODE ? undefined : '02n',
    });

    if (!DEV_MODE) {
        axios.get(OPEN_WEATHER_MAP_API_ENDPOINT, {
            params: {
            q: 'London,uk',
            appid:  OPEN_WEATHER_MAP_API_KEY,
            units: 'metric'
            }
        })
        .then(function (response) {    
            console.log(response);
            setWeather({
                temperature: response.data.main.temp,
                humidity: response.data.main.humidity,
                windSpeed: response.data.wind.speed,
                icon: response.data.weather.icon
            })
        })
        .catch(function (error) {
            // Handle error accordingly
            console.log(error);
        });
    }

  return (
    <div>
        <p>Temp: {weather.temperature} </p>
        <p>Humidity: {weather.humidity} </p>
        <p>Wind: {weather.windSpeed} </p>
        <img className="Weather-icon" alt="weather-icon" src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} />
    </div>
  );
}
