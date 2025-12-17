// UserInfoDisplay.jsx
import React, { useContext } from "react";
import UserContext from "../contexs/UserContext";

function UserInfoDisplay() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <p>Selamat datang, {user.name}!</p>
      {user.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("ryan")}>Login sebagai ryan</button>
      )}
    </div>
  );
}
export default UserInfoDisplay;
