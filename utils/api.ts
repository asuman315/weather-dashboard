import axios from 'axios';

const API_KEY = '7222233134e6d7f5b172900d0339b14f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

interface WeatherResponse {
  // Define the structure according to the data you need from the API response
}

export const fetchWeatherData = async (city: string, unit: 'metric' | 'imperial' = 'metric'): Promise<WeatherResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: unit,
        APPID: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching weather data:', error);
    throw error; // Rethrow or handle as needed
  }
};
