import React, { useState } from "react";

// common component
import Button from "./Button";

const Input = ({
  type = "",
  className = "",
  placeholder = "",
  isDisable = "",
  onClick,
}) => {
  const [data, setData] = useState();

  // buttton click
  const buttonClick = () => {
    onClick(data);
  };

  // on press enter
  const keyPressHandler = (e) => {
    if (e.key === "Enter") onClick(data);
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* search icon */}
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className={`${className} block w-full p-4 ps-10 text-lg text-gray-900 border border-blue-300 rounded-lg`}
            placeholder={placeholder}
            onChange={(e) => setData(e.target.value)}
            onKeyPress={(e) => keyPressHandler(e)}
            required
          />
          {/* common component */}
          <Button clickHandler={(e) => buttonClick(e)} />
        </div>
      </div>
    </div>
  );
};

export default Input;
