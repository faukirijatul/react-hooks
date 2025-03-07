import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const value = { count, setCount };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
