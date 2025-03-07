import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      {user.isAdmin && "Adalah admin"}
    </div>
  );
};

export default UserProfile;
