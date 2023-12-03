import React from "react";

function WeatherToday({ weatherData }) {
  // check data available or not
  if (
    !weatherData ||
    !weatherData.main ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return null;
  }

  // parsing data
  const temperature = Math.round(weatherData.main.temp - 273.15);
  const feelsLike = Math.round(weatherData.main.feels_like - 273.15);
  const description = weatherData.weather[0].description;
  const date = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const time = new Date().toLocaleTimeString();
  const location = weatherData.name;
  const country = weatherData.sys.country;

  const iconCode = weatherData.weather[0].icon;

  // Set the weather icon dynamically
  const weatherIcon = iconCode ? (
    <img
      src={require(`../assets/${iconCode}.png`)} // dynamic import from assets folder
      alt="Weather Icon"
      className="w-16 h-16 mr-8"
    />
  ) : null;

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md px-8 py-14 m-4 sm:flex-col md:px-[64px] sm:px-[54px]">
      {weatherIcon}
      <div className="">
        {/* <p className="text-2xl font-bold mb-4 ml-0">
          Temperature : {temperature}°C
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-1">
          <div className="flex">
            <h3 className="text-2xl font-bold mb-2">Temperature : </h3>
            <p className="text-2xl font-bold ml-2">{temperature}°C</p>
          </div>
          <div className="flex">
            <h3 className="text-lg font-semibold mb-2">Feels Like : </h3>
            <p className="text-lg ml-2">{feelsLike}°C</p>
          </div>
          <div className="flex">
            <h3 className="text-lg font-semibold mb-2">Description : </h3>
            <p className="text-lg ml-2">{description}</p>
          </div>
          <div className="flex">
            <h3 className="text-lg font-semibold mb-2">Date : </h3>
            <p className="text-lg ml-2 sm:ml-0"> {date}</p>
          </div>
          <div className="flex">
            <h3 className="text-lg font-semibold mb-2">Time : </h3>
            <p className="text-lg ml-2">{time}</p>
          </div>
          <div className="flex">
            <h3 className="text-lg font-semibold mb-2">Location : </h3>
            <p className="text-lg ml-2">
              {location}, {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherToday;
