import React, { useState } from "react";

const Container = () => {
  // All Business Logic is Written in the Container Component and passed only value/state to Presentational component
  // Drawback is Container file will be very big and hard to maintain and also brings props drilling problem
  const [counter, setCounter] = useState(1);

  function handleIncrease() {
    setCounter(counter + 1);
  }
  function handleDecrease() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <Button label={"Decrease"} onClick={handleDecrease} />
      <CounterValue counterValue={counter} />
      <Button label={"Increase"} onClick={handleIncrease} />
    </div>
  );
};

function CounterValue({ counterValue }) {
  return <span>{counterValue}</span>;
}

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

export default Container;
