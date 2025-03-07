import React from "react";
import { AppContext } from "../context/AppContext";

const Counter = () => {
  const { count, setCount } = React.useContext(AppContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
