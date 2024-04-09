// components/ForecastCard.tsx
import React, { useContext } from "react";
import { WeatherContext } from "@/pages/_app";
import { iconSVGs } from "@/assets/iconSVGs";
import CustomIcon from "./shared-components/CustomIcon";
import LoaderComponent from "./shared-components/LoaderComponent";


const ForecastCard = () => {
  const { locationIcon } = iconSVGs;
  const { data, isLoading } = useContext(WeatherContext);
  const { unit = 'metric', weatherData } = data;

  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  const forecastDetails = [
      {
        name: "Humidity",
        value: `${weatherData?.main?.humidity}%`,
      },
      {
        name: "Wind",
        value: `${weatherData?.wind?.speed} ${
          unit === "metric" ? "m/s" : "mph"
        }`,
      }
    ];


  // get date in format name of day, day/month/year
  const date = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <div className=" max-w-md rounded overflow-hidden shadow-lg m-2">
      {isLoading && ( // show a loading animation when data is loading
      <div className="py-4 px-8 bg-gray-200">
        <LoaderComponent />
      </div>
      )}
      {!isLoading && ( // show the forecast card only when the data is not loading
        <>
          <div className="px-6 py-4">
            <div className="flex justify-center items-center">
              <CustomIcon svg={locationIcon} />
              <h3 className="font-semibold">
                {weatherData?.name}, {weatherData?.sys?.country}
              </h3>
            </div>
            <div className="font-bold text-xl my-2">{date}</div>
            <p className="text-gray-700 text-base">
              High: {weatherData?.main?.temp_max.toFixed(1)} {temperatureUnit}
            </p>
            <p className="text-gray-700 text-base">
              Low: {weatherData?.main?.temp_min.toFixed(1)} {temperatureUnit}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {forecastDetails.map(
              (detail: { name: string; value: string }) => (
                <span
                  key={detail.name}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {detail.name}: {detail.value}
                </span>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ForecastCard;
