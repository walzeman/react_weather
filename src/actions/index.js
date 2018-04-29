import axios from "axios";

const API_KEY = "a2faf144342495ddd28b5c2b197cb034";

const CITY = "New York";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url); // axios behaves like jquery ajax method. It makes ajax call and returns a promise

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}