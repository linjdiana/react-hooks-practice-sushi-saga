import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((response) => response.json())
      .then((data) => setSushis(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
      />
      <Table />
    </div>
  );
}

export default App;
