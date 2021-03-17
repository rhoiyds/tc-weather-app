import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectTemperature,
    selectHumidity,
    selectWindSpeed,
    selectIcon,
    selectCity,
    selectIsHighwind
} from './weatherSlice';
import './Weather.css';

export function Weather() {

    const temperature = useSelector(selectTemperature);
    const humidity = useSelector(selectHumidity);
    const windSpeed = useSelector(selectWindSpeed);
    const icon = useSelector(selectIcon);
    const city = useSelector(selectCity);
    const isHighwind = useSelector(selectIsHighwind);

  return (
    <div className="weather-container">
        <div className="city-name"> 
          {city}
        </div>
        <img className="weather-icon" alt="weather-icon" height="325px" src={`http://openweathermap.org/img/wn/${icon}@4x.png`} />
        <hr />
        <div className="container">
          <div className="temperature">
            {temperature} &deg;
          </div>
          <div className="wind-and-humidity">
            <div className="humidity"><i className="wi wi-raindrop"></i>{humidity}%</div>
            <div className="wind">
              <i className={"wi " + (isHighwind ? "wi-gale-warning" : "wi-small-craft-advisory")}></i>
              {windSpeed} <small>Km/h</small>
            </div>
          </div>
        </div>
    </div>
  );
}
