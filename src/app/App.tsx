import React, { useEffect } from "react";
import * as d3 from "d3";

function App() {
  useEffect(() => {
    d3.select("body").append("span").text("Hello, world!");
  });
  return <>Hello Friend!</>;
}

export default App;
