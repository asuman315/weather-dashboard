// components/SearchBar.tsx
import { useContext, useState, useEffect, use } from 'react';
import { WeatherContext } from '../pages/_app';
import { fetchWeatherData } from '@/utils/api';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const { setData, data, setAlert, setIsLoading } = useContext(WeatherContext);

  // fetch weather data for the city and save it to the global context to be used by other components
  const saveWeatherData = async (city: string) => {
    try {
      const response = await fetchWeatherData(city);
      console.log('Weather data response:', response);
      setData({ ...data, city, weatherData: response });
      // notify user of successful fetch
      setAlert({ msg: 'Weather data fetched successfully', type: 'success' });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setAlert({ msg: 'Error fetching weather data', type: 'danger' });
    }
  };
  

  // when user submits form, fetch weather data for the city and save it to the global context
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ensure user enters a city name
    if (inputValue.trim() === '') return setAlert({ msg: 'Please enter a city name', type: 'warning' });
    try {
      setIsLoading(true); // Set loading state to true
      await saveWeatherData(inputValue);
      setInputValue(''); // Clear the input after search
      setIsLoading(false); // Set loading state to false
    } catch (error) {
      console.error('Error fetching weather data:', error); 
    }
  };

  useEffect(() => {
    // fetch weather data for default city - kamapala - on component mount
    saveWeatherData('Kampala');
  } ,[]);

  return (
    <form onSubmit={handleSearch} className="flex my-5">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name..."
        className="rounded-l border-2 border-r-0 border-primary-500 p-2"
      />
      <button
        type="submit"
        className="bg-primary-500 text-white rounded-r px-4 hover:bg-primary-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
