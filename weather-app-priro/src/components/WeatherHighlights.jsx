import React from "react";

const WeatherHighlights = ({ weatherData }) => {
  // check data available or not
  if (!weatherData || !weatherData.main || !weatherData.visibility) {
    return null; // Render nothing if data is not available yet
  }

  // parsing data
  const humidity = weatherData.main.humidity;
  const visibility = weatherData.visibility;
  const windSpeed = weatherData.wind.speed;
  const cloudiness = weatherData.clouds.all;
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="bg-white rounded-lg shadow-md p-8 m-4">
      <h2 className="text-3xl font-bold mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex">
          <h3 className="text-lg font-semibold mb-2">Sunrise : </h3>
          <p className="text-lg ml-2">{sunrise}</p>
        </div>
        <div className="flex">
          <h3 className="text-lg font-semibold mb-2">Sunset : </h3>
          <p className="text-lg ml-2">{sunset}</p>
        </div>
        <div className="flex">
          <h3 className="text-lg font-semibold mb-2">Humidity : </h3>
          <p className="text-lg ml-2">{humidity}%</p>
        </div>
        <div className="flex">
          <h3 className="text-lg font-semibold mb-2">Wind Speed :</h3>
          <p className="text-lg ml-2">{windSpeed} km/h</p>
        </div>
        <div className="flex">
          <h3 className="text-lg font-semibold mb-2">Visibility :</h3>
          <p className="text-lg ml-2">{visibility} km</p>
        </div>
        <div className="flex">
          <h3 className="text-lg font-semibold mb-2">Cloudiness : </h3>
          <p className="text-lg ml-2">{cloudiness}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherHighlights;
