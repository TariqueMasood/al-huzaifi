import React from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  padding: 2rem 1rem;
  width: 250px;
  position: fixed;
  color: ${({ theme }) => theme.colors.themeTextColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 8px 0 0 8px; /* Rounded corners on the left side */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLink = styled(NavLink)`
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.themeTextColor};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBg};
    color: ${({ theme }) => theme.colors.activeTextColor};
    transform: translateX(5px); /* Subtle hover animation */
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.themeColor};
    color: white;
  }
`;

const SidebarFooter = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.themeTextColor2};
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.themeTextColor};
`;

const Sidebar = () => (
  <SidebarContainer>
    <div>
      <h4>Admin Panel</h4>
      <Nav className="flex-column">
        <StyledLink to="/dashboard">Dashboard</StyledLink>
        <StyledLink to="/dashboard/registered-users">Users</StyledLink>
      </Nav>
    </div>
    <SidebarFooter>&copy; 2025 Admin Dashboard</SidebarFooter>
  </SidebarContainer>
);

export default Sidebar;
