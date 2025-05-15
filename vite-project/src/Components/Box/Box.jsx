import { motion } from "framer-motion";

import { useState } from "react";

export default function Box() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
    console.log("Switch toggled to: " + (isOn ? "Off" : "On"));
  };

  const container = {
    width: 100,
    height: 50,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: 10,
  };

  const handle = {
    width: 35,
    height: 35,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
  };

  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: "flex-" + (isOn ? "start" : "end"),
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle"
        style={handle}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}
