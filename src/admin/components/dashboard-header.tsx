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
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 60px;
`;

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <h5>Admin Dashboard</h5>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </HeaderContainer>
  );
};

export default DashboardHeader;
