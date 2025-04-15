import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 250px;
  color: ${({ theme }) => theme.colors.themeTextColor2};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-bottom: 1px solid ${({ theme }) => theme.colors.themeTextColor};
`;

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <h5>Admin Dashboard</h5>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
    </HeaderContainer>
  );
};

export default DashboardHeader;
