import React, { useEffect }  from 'react';
import { Weather } from './features/weather/Weather';
import { requestGeolocation } from './utilities/geolocation';
import { fetchWeatherData } from './utilities/openWeatherMap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCondition, selectIsHot } from './features/weather/weatherSlice'
import { updateWeather } from './features/weather/weatherSlice';
import { nextCity, selectCurrentCity, updateCities } from './features/cities/citiesSlice';
import { css } from '@emotion/css'
import Particles from "react-tsparticles";

function App() {

  const dispatch = useDispatch();

  const queryString = require('query-string');

  const isHot = useSelector(selectIsHot);

  const conditionParticles = useSelector(selectCondition)

  const currentCity = useSelector(selectCurrentCity)

  //useEffect to control this function to only run on the first render.
  useEffect(() => {

    // (Roy) Check the URL parameters for a list of cities
    const queryParameter = queryString.parse(window.location.search)['city'];
  
    // (Roy) Decide whether to use geocoordinates or the query string 
    if (queryParameter) {
      // (Roy) convert parameter array to a set (to remove duplicates) and back to array
      const cities = [...new Set(queryParameter.split(','))];

      // (Roy) add our cities to the store
      dispatch(updateCities(cities))

      // (Roy) Rotate through the cities in the store once every 5 seconds
      window.setInterval(function(){
        dispatch(nextCity())
      }, 5000);
    } else {
      // (Roy) Otherwise resolve our current location, and fetch the weather for there
      requestGeolocation((position) => {
        const extraParams = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
        fetchWeatherData(extraParams, dispatchCallBack)
      });
    }
  }, []);

  // (Roy) When current city is updated, fetch the weather data
  useEffect(() => { 
    if (!currentCity) return
    fetchWeatherData({q: currentCity}, dispatchCallBack)   
  }, [currentCity]);

  // (Roy) A function used as a callback after retrieving weather data from the API
  function dispatchCallBack(response) {    
    // (Roy) Store our weather data in the Redux store
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
