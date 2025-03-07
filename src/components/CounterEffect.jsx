import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default CounterEffect;
