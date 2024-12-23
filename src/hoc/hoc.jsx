import React, { useState } from "react";
// withConsoleLog is HOC which takes CounterValue as Component and return the Component
const SpecialCounterValue = withConsoleLog(CounterValue);

const HOC = () => {
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
      <SpecialCounterValue counterValue={counter} />
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

function CounterValue({ counterValue, specialChar }) {
  return (
    <span>
      {counterValue}
      {specialChar}
    </span>
  );
}

function Button({ onClick, renderLabel }) {
  const number = 9;
  return <button onClick={onClick}>{renderLabel(number)}</button>;
}

function withConsoleLog(Component) {
  // Here We Return the Component which is Anonymous
  return function (props) {
    console.log("Component is Rendered");
    return (
      <div>
        <h3>Below is the Counter Value</h3>
        <Component {...props} specialChar={"*"} />
      </div>
    );
  };
}

export default HOC;
