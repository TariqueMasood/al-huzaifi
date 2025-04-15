import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const hasToken = localStorage.getItem("token");

  return hasToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
