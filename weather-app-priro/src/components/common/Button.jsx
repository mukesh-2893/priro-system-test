import React from "react";

const Button = ({ clickHandler }) => {
  // button clicked
  const handleButtonClick = () => {
    clickHandler();
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        onEnter
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
      >
        Search
      </button>
    </div>
  );
};

export default Button;
