import React from "react";
import FacthDataEffect from "./components/FacthDataEffect";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";

const App = () => {
  return (
    <div>
      <BasicEffect />
      <CounterEffect />
      <FacthDataEffect />
    </div>
  );
};

export default App;
