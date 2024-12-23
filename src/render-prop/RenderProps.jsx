// 1. Render Prop is the prop that renders the element
// 2. It Brings Two Way Communication between parent and child , parent can receive the value from child.
// Example Code
{
  /*<Button>
        <h1>I am Render Prop Pattern</h1>
    </Button>;

function Button({ children }) {
  return <button>{children}</button>;
} */
}

import React, { useState } from "react";

const Render = () => {
  const [counter, setCounter] = useState(1);

  function handleIncrease() {
    setCounter(counter + 1);
  }
  function handleDecrease() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <Button
        renderLabel={function (n) {
          return (
            <>
              <h2>My Custom Render Prop {n}</h2>
            </>
          );
        }}
        onClick={handleDecrease}
      />
      <CounterValue counterValue={counter} />
      <Button
        renderLabel={(k) => {
          return (
            <>
              <h2>My Custom Render Prop for Decrease.{k}</h2>
            </>
          );
        }}
        onClick={handleIncrease}
      />
    </div>
  );
};

function CounterValue({ counterValue }) {
  return <span>{counterValue}</span>;
}

function Button({ onClick, renderLabel }) {
  const number = 9;
  return <button onClick={onClick}>{renderLabel(number)}</button>;
}

export default Render;
