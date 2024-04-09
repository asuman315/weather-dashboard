import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WeatherContext } from "@/pages/_app";
import ForecastCard from '../components/ForecastCard';

// Mock data for testing
const mockWeatherData = {
  unit: 'metric',
  weatherData: {
    main: {
      humidity: 80,
      temp_max: 26,
      temp_min: 18,
    },
    wind: {
      speed: 5,
    },
    name: 'CityName',
    sys: {
      country: 'CountryCode',
    },
  },
};

// Test to check if ForecastCard renders correctly when data is loading
test('renders loading state correctly', () => {
  render(
    <WeatherContext.Provider value={{ data: {}, isLoading: true }}>
      <ForecastCard />
    </WeatherContext.Provider>
  );

  expect(screen.getByText(/loading.../i)).toBeInTheDocument();
});

// Test to check if ForecastCard renders correctly when data has loaded
test('renders data correctly', () => {
  render(
    <WeatherContext.Provider value={{ data: mockWeatherData, isLoading: false }}>
      <ForecastCard />
    </WeatherContext.Provider>
  );

  expect(screen.getByText(/CityName, CountryCode/i)).toBeInTheDocument();
  expect(screen.getByText(/High: 26.0 °C/i)).toBeInTheDocument();
  expect(screen.getByText(/Low: 18.0 °C/i)).toBeInTheDocument();
});
