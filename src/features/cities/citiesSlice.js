import { createSlice } from '@reduxjs/toolkit';

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    current: undefined,
    all: []
  },
  reducers: {
    updateCities: (state, action) => {
        state.all = action.payload;
        state.current = state.all[0]
    },
    nextCity: (state) => {
        if (!state.current) {
            state.current = state.all[0]
        } else {
            const currentCityIndex = state.all.indexOf(state.current)
            let nextCity = undefined;
            if (currentCityIndex === state.all.length - 1) {
                nextCity = state.all[0];
            } else {
                nextCity = state.all[currentCityIndex + 1];
            }
            state.current = nextCity
        }
    }
  },
});

export const { updateCities, nextCity } = citiesSlice.actions;

export const selectCities = state => state.cities.all;

export const currentCity = state => state.cities.current;

export const selectNextCity = state => {
    const currentCityIndex = state.cities.all.indexOf(state.cities.current)
    let nextCity = undefined;
    if (currentCityIndex === state.cities.all.length - 1) {
        nextCity = state.cities.all[0];
    } else {
        nextCity = state.cities.all[currentCityIndex + 1];
    }
    return nextCity
}

export const selectCurrentCity = state => state.cities.current;

export default citiesSlice.reducer;




