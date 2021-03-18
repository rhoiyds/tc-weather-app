import { setup } from 'axios-cache-adapter'

const OPEN_WEATHER_MAP_API_KEY = '854bd4455249d79ab3b98653353ab63e';
const OPEN_WEATHER_MAP_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const defaultParams = {
    appid:  OPEN_WEATHER_MAP_API_KEY,
    units: 'metric'
}

const api = setup()

export async function fetchWeatherData(extraParams) {
    const params = {...defaultParams, ...extraParams}
    // (Roy) 'Exclude' is only neccessary due to a horrible bug which stops the cache from working
    // as intended, when paired with query parameters. Lost a few hours searching for this...
    // https://github.com/RasCarlito/axios-cache-adapter/issues/117#issuecomment-555017242
    return await api.get(OPEN_WEATHER_MAP_API_ENDPOINT, {
        cache: {
            maxAge: 5 * 60 * 1000, //5 minutes (in milliseconds)
            exclude: { query: false }
        },
        params: params
    })
}