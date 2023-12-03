import React, { useState } from "react";
import Input from "./common/Input";
import WeatherToday from "./WeatherToday";
import Loader from "./common/Loader";
import WeatherHighlights from "./WeatherHighlights";
import { apiKey, apiUrl } from "./constants/api";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  const searchResult = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setData(data);
      setLoading(false);
    }
  };
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center my-9">
      <div className="my-6">
        <Input
          type="text"
          placeholder="Enter city name"
          className="w-full"
          onClick={(e) => searchResult(e)}
        />
      </div>
      {!isLoading ? (
        <div className="flex bg-gray-200 items-center justify-center align-middle rounded-lg ">
          {data && data.cod === "404" ? (
            <p className="p-8 text-3xl">{data.message}</p>
          ) : (
            <>
              <WeatherToday weatherData={data} />
              <WeatherHighlights weatherData={data} />
            </>
          )}
        </div>
      ) : (
        <Loader height="100" width="100" color="#1D4ED8" />
      )}
    </div>
  );
};

export default Home;
