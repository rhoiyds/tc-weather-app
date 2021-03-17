import React from 'react';
import { Weather } from './features/weather/Weather';
import { requestGeolocation } from './utilities/geolocation';
import { fetchWeatherData } from './utilities/openWeatherMap';
import { useDispatch } from 'react-redux';
import { updateWeather } from './features/weather/weatherSlice';


import './App.css';

function App() {

  const dispatch = useDispatch();
  const queryString = require('query-string');

  //Check the URL parameters for a list of cities
  const queryParameter = queryString.parse(window.location.search)['cities'];

  if (queryParameter) {
    //If the list of cities exist, fetch the weather data for them
    fetchWeatherData({q: queryParameter}, dispatchCallBack)
  } else {
    //Otherwise resolve our current location, and fetch the weather for there
    requestGeolocation((position) => {
      const extraParams = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      fetchWeatherData(extraParams, dispatchCallBack)
    });
  }

  function dispatchCallBack(response) {    
    console.log(response);
    //Store our weather data in the 
    dispatch(updateWeather({
        city: response.data.name,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        // (Roy) Weather is an array of Weather objects (unclear why)
        icon: response.data.weather[0].icon
    }))
}

  return (
   <div>
     <Weather />
   </div>
        
  );
}

export default App;
