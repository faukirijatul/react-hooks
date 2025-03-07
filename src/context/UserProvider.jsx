import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Fauki",
    isAdmin: true,
  });

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
