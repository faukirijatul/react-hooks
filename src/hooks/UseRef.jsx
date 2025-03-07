import React, { useRef } from "react";

const UseRef = () => {
  const inputElement = useRef(null);
  console.log(inputElement);

  return (
    <div>
      <input type="text" ref={inputElement} />
    </div>
  );
};

export default UseRef;
