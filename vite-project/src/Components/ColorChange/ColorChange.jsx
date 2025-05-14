import React, { useState } from "react";

const ColorChange = () => {
  const [color, setcolor] = useState({
    red: false,
    green: false,
  });

  const handleRed = () => {
    setcolor({ red: true, green: false });
  };
  const handleGreen = () => {
    setcolor({ red: false, green: true });
  };

  const handleTransperant = () => {
    setcolor({ red: false, green: false });
  };

  const getBackgroundColor = () => {
    if (color.red) return "red";
    if (color.green) return "green";
    return "white";
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: getBackgroundColor(),
          height: "100px",
          width: "100px",
        }}
      ></div>
      <button onClick={handleRed}>red</button>
      <button onClick={handleGreen}>green</button>
      <button onClick={handleTransperant}>transperant</button>
    </div>
  );
};

export default ColorChange;
