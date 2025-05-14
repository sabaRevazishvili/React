import { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start counting on mount
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clear the interval on unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const pauseHandler = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset reference
  };

  const continueHandler = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  };

  const restartHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={continueHandler}>Continue</button>
      <button onClick={restartHandler}>Restart</button>
    </div>
  );
}

export default Counter;
