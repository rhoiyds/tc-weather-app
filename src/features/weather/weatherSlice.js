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

// (Roy) For an entire list of types a weather condition can be, refer to the API guidelines below
// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
export const selectIsSunny = state => ['Clear', 'Clouds'].includes(state.weather.condition);

export default weatherSlice.reducer;




