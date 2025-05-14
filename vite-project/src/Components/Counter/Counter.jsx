import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const [isNegative, setIsNegative] = useState(false);
  const counterIncrease = () => {
    setCounter((prev) => prev + number);
    setIsNegative(false);
  };
  const CounterDecrease = () => {
    if (counter - number < 0) {
      setIsNegative(true);
    } else {
      setCounter((prev) => prev - number);
      setIsNegative(false);
    }
  };
  return (
    <div>
      <h1>counter: {counter}</h1>
      {isNegative && <h1>Its Negative</h1>}
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => {
          setNumber(Number(e.target.value));
          console.log(e.target.value);
        }}
      />

      <button onClick={counterIncrease}>+</button>
      <button onClick={CounterDecrease} disabled={isNegative}>
        -
      </button>
    </div>
  );
};

export default Counter;
