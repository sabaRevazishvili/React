import React, { useState } from "react";

const InputFieldMonitor = () => {
  const [text, setText] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>{text}</h1>
      <input onChange={textHandler} />
    </div>
  );
};

export default InputFieldMonitor;
