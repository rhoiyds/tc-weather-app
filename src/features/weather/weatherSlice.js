import { createSlice } from '@reduxjs/toolkit';

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

//An arbitary threshold to control what is 'hot' (yellow), or 'cold' (blue). As an Australian, below 15 is very chilly.
export const selectIsHot = state => state.weather.temperature > 15;

//An arbitary threshold to control highwind icon
export const selectIsHighwind = state => state.weather.windSpeed > 40;

export default weatherSlice.reducer;




