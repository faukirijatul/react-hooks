import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Componet Mounted");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
