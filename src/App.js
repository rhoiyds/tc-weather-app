import React from 'react';
import { Weather } from './features/weather/Weather';
import { requestGeolocation } from './utilities/geolocation';
import { fetchWeatherData } from './utilities/openWeatherMap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCondition, selectIsHot } from './features/weather/weatherSlice'
import { updateWeather } from './features/weather/weatherSlice';
import { css } from '@emotion/css'
import Particles from "react-tsparticles";

function App() {

  const isHot = useSelector(selectIsHot);

  const conditionParticles = useSelector(selectCondition)

  const dispatch = useDispatch();
  const queryString = require('query-string');

  //Check the URL parameters for a list of cities
  const queryParameter = queryString.parse(window.location.search)['city'];

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
    //Store our weather data in the Redux store
    dispatch(updateWeather({
        city: response.data.name,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        // (Roy) Weather is an array of Weather objects for showing weather over time, current weather is index 0
        icon: response.data.weather[0].icon,
        condition: response.data.weather[0].main
    }))
}

  return (
    <>
      <Particles
      className={css`
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: ${isHot ? '#ffcc01' : '#273f8f'};
      `}
      id="tsparticles"
      options={conditionParticles}
    />
    <div className={css`
          width: 100%;
          height: 100%;
          position: absolute;
    `}>
      <Weather />
   </div>
   </>
        
  );
}

export default App;
