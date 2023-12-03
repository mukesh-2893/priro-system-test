import React, { useState } from "react";

// common components
import Input from "./common/Input";
import Loader from "./common/Loader";

// constants
import { apiKey, apiUrl } from "./constants/api";

// sub components
import WeatherToday from "./WeatherToday";
import WeatherHighlights from "./WeatherHighlights";

const Home = () => {
  // state for api response store
  const [data, setData] = useState();

  // unable loader using state
  const [isLoading, setLoading] = useState(false);

  // button clicked or enter press function
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
              {/* weather condition components */}
              <WeatherToday weatherData={data} />
              <WeatherHighlights weatherData={data} />
            </>
          )}
        </div>
      ) : (
        // loader
        <Loader height="100" width="100" color="#1D4ED8" />
      )}
    </div>
  );
};

export default Home;
