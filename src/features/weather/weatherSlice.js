import { createSlice } from '@reduxjs/toolkit';
import { rainy } from '../../particles/rainy';
import { sunny } from '../../particles/sunny';
import { snowy } from '../../particles/snowy';
import { cloudy } from '../../particles/cloudy';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    icon: undefined,
    city: undefined,
    condition: undefined

  },
  reducers: {
    updateWeather: (state, action) => {
      // (Roy) Remove decimal points for a visually nicer values
      state.temperature = Math.trunc(action.payload.temperature);
      state.humidity = Math.trunc(action.payload.humidity);
      state.windSpeed = Math.trunc(action.payload.windSpeed);
      state.icon = action.payload.icon;
      state.city = action.payload.city;
      state.condition = action.payload.condition;
    }
  },
});

export const { updateWeather } = weatherSlice.actions;

export const selectTemperature = state => state.weather.temperature;

export const selectHumidity = state => state.weather.humidity;

export const selectWindSpeed = state => state.weather.windSpeed;

export const selectIcon = state => state.weather.icon;

export const selectCity = state => state.weather.city;

// (Roy) An arbitary threshold to control what is 'hot' (yellow), or 'cold' (blue). As an Australian, below 15 is very chilly.
export const selectIsHot = state => state.weather.temperature > 15;

// (Roy) An arbitary threshold to control highwind icon
export const selectIsHighwind = state => state.weather.windSpeed > 40;

// (Roy) For a comprehensive list of different types of weather conditions check below:
// https://openweathermap.org/weather-conditions
export const selectCondition = state => {
  switch (state.weather.condition) {
    case 'Clear':
      return sunny
    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      return rainy
    case 'Snow':
      return snowy
    default:
      return cloudy
  }
}

export default weatherSlice.reducer;




