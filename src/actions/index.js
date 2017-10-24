import axios from 'axios'

const API_KEY = 'aa029e42f7fcc756f1b5102d3290cc17'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// convention to create constant for strings for action types to prevent typos
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url)

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}