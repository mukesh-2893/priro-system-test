import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ height, width, color }) => {
  return (
    <div>
      <TailSpin height={height} width={width} color={color} />
    </div>
  );
};

export default Loader;
