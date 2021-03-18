import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import citiesReducer from '../features/cities/citiesSlice';

export default configureStore({
  reducer: {
    weather: weatherReducer,
    cities: citiesReducer
  },
});
