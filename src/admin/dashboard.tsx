import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2>Welcome to the Dashboard</h2>
      <p>This is a protected route.</p>
      <button
        className="btn btn-danger mt-3"
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
