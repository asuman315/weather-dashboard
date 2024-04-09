import React, {useState} from 'react';
import SearchBar from '@/components/SearchBar';
import TemperatureToggle from '@/components/TemperatureToggle';
import ForecastCard from '@/components/ForecastCard';

const WeatherDashboardPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold my-6">
          Weather Dashboard
        </h1>
        <SearchBar />
        <TemperatureToggle />
        <div className="flex flex-wrap justify-center items-center max-w-4xl mt-6 w-full">
          <ForecastCard />
        </div>
      </main>
    </div>
  );
};


export default WeatherDashboardPage;