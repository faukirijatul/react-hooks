import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UpdateUser = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
    </div>
  );
};

export default UpdateUser;
