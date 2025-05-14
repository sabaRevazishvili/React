import { useState, useEffect } from "react";

function TitleChanger() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.title = inputValue || "Default Title";
  }, [inputValue]); // Runs whenever inputValue changes

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>The page title will change as you type.</p>
    </div>
  );
}

export default TitleChanger;
