import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); // simulate login
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>
      <button className="btn btn-primary" onClick={handleLogin}>
        Simulate Login
      </button>
    </div>
  );
};

export default Login;
