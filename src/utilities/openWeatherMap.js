const axios = require('axios');
const OPEN_WEATHER_MAP_API_KEY = '854bd4455249d79ab3b98653353ab63e';
const OPEN_WEATHER_MAP_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const defaultParams = {
    appid:  OPEN_WEATHER_MAP_API_KEY,
    units: 'metric'
}

export function fetchWeatherData(extraParams, dispatchCallback) {
    const params = {...defaultParams, ...extraParams}
    axios.get(OPEN_WEATHER_MAP_API_ENDPOINT, {
        params: params
    })
    .then(dispatchCallback)
    .catch(function (error) {
        // (Roy) Add error messaging and notification for the final case of no query parameter, and denied location access
        console.log(error);
    });
}