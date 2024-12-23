import React, { useEffect, useState } from "react";
import useNetwork from "./useNetwork";

const URL = "https://api.npoint.io/e475e9ba44cb783a6fdf";
const HooksPattern = () => {
  const { isLoading, data } = useNetwork(URL);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>hello {data} !!!</h1>
    </div>
  );
};

export default HooksPattern;
