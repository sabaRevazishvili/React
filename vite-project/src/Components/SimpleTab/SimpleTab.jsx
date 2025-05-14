import React, { useState } from "react";

const SimpleTab = () => {
  const [tab, setTab] = useState("tab1");
  return (
    <div>
      <div>
        <button onClick={() => setTab("tab1")}>tab 1</button>
        <button onClick={() => setTab("tab2")}>tab 2</button>
        <button onClick={() => setTab("tab3")}>tab 3</button>
      </div>
      <div>
        {tab === "tab1" && <p>Tab 1 Content</p>}
        {tab === "tab2" && <p>Tab 2 Content</p>}
        {tab === "tab3" && <p>Tab 3 Content</p>}
      </div>
    </div>
  );
};

export default SimpleTab;
