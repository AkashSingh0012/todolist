import React, { useState } from "react";
import "./Login.css"
const UserLogin = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log("User ID:", userId);
    console.log("Password:", password);

    if (userId === "admin" && password === "password") {
      onLogin(userId, password);
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="user-auth-container">
      <h2>Login to To-Do App</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
