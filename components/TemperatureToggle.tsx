// components/TemperatureToggle.tsx
import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../pages/_app";
import {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} from "@/utils/convertTemperature";

const TemperatureToggle: React.FC = () => {
  const { data, setData } = useContext(WeatherContext);

  interface MainWeatherData {
    temp_min: number;
    temp_max: number;
  }

  interface WeatherData {
    main: MainWeatherData;
  }

  interface DataState {
    unit: "metric" | "imperial";
    weatherData?: WeatherData;
  }

 
  // Helper function for temperature conversion and data update
  const updateTemperature = (convertFn: (temp: number) => number) => {
    const convertedLowTemp = convertFn(data.weatherData.main.temp_min);
    const convertedHighTemp = convertFn(data.weatherData.main.temp_max);
    setData((prevData: DataState) => ({
      ...prevData,
      weatherData: {
        ...prevData.weatherData, // TypeScript understands this might be undefined, so it's safe due to the early return above
        main: {
          ...prevData.weatherData!.main, // The non-null assertion (!) is safe here due to the early return
          temp_min: convertedLowTemp,
          temp_max: convertedHighTemp,
        },
      },
    }));
  };


  useEffect(() => { // convert temperature when the unit changes and depending on the current unit
    if (!data?.weatherData) return;
    data.unit === "metric"
      ? updateTemperature(fahrenheitToCelsius)
      : updateTemperature(celsiusToFahrenheit);
  }, [data?.unit]);


  const toggleTemperature = () => {
    setData({
      ...data,
      unit: data.unit === "metric" ? "imperial" : "metric",
    });
  };

  return (
    <button
      onClick={toggleTemperature}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
    >
      Switch to {data?.unit === "metric" ? "Fahrenheit" : "Celsius"}
    </button>
  );
};

export default TemperatureToggle;
