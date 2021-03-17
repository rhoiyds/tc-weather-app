import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectTemperature,
    selectHumidity,
    selectWindSpeed,
    selectIcon,
    selectCity
} from './weatherSlice';
import './Weather.css';

export function Weather() {

    const temperature = useSelector(selectTemperature);
    const humidity = useSelector(selectHumidity);
    const windSpeed = useSelector(selectWindSpeed);
    const icon = useSelector(selectIcon);
    const city = useSelector(selectCity);

  return (
    <div>
        <p>City: {city} </p>
        <p>Temp: {temperature} </p>
        <p>Humidity: {humidity} </p>
        <p>Wind: {windSpeed} </p>
        <img className="Weather-icon" alt="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@4x.png`} />
    </div>
  );
}
