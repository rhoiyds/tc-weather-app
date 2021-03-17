import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    icon: undefined,
    city: undefined
  },
  reducers: {
    updateWeather: (state, action) => {
      state.temperature = action.payload.temperature;
      state.humidity = action.payload.humidity;
      state.windSpeed = action.payload.windSpeed;
      state.icon = action.payload.icon;
      state.city = action.payload.city;
    }
  },
});

export const { updateWeather } = weatherSlice.actions;

export const selectTemperature = state => state.weather.temperature;

export const selectHumidity = state => state.weather.humidity;

export const selectWindSpeed = state => state.weather.windSpeed;

export const selectIcon = state => state.weather.icon;

export const selectCity = state => state.weather.city;

export default weatherSlice.reducer;




