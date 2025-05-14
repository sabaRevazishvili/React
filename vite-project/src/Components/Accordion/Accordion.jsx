import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const accordionHandler = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div onClick={accordionHandler}>click me</div>
      <div style={{ height: open ? "100px" : "0px", background: "red" }}></div>
    </div>
  );
};

export default Accordion;
