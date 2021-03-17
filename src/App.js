import React from 'react';
import { useDispatch } from 'react-redux';
import { Weather } from './features/weather/Weather';
import { updateWeather } from './features/weather/weatherSlice';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const axios = require('axios');
  const OPEN_WEATHER_MAP_API_KEY = '854bd4455249d79ab3b98653353ab63e';
  const OPEN_WEATHER_MAP_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

  axios.get(OPEN_WEATHER_MAP_API_ENDPOINT, {
    params: {
    q: 'London,uk',
    appid:  OPEN_WEATHER_MAP_API_KEY,
    units: 'metric'
    }
    })
    .then(function (response) {    
        console.log(response);
        dispatch(updateWeather({
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
          // (Roy) Weather is an array of Weather objects (unclear why)
          icon: response.data.weather[0].icon
      }))
    })
    .catch(function (error) {
        // (Roy) Add error messaging and notification
        console.log(error);
    });

  return (
   <div>
     <Weather />
   </div>
        
  );
}

export default App;
