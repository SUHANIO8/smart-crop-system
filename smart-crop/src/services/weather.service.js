import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const weatherService = {
  async getWeatherData(city) {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
      const data = response.data;

      return {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        // OpenWeather returns rainfall in 'rain.1h' or 'rain.3h' if it's currently raining
        rainfall: data.rain ? (data.rain['1h'] || data.rain['3h'] || 0) : 0,
        city: data.name
      };
    } catch (error) {
      throw new Error('City not found. Please try again.');
    }
  }
};