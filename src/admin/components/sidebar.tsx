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
`;

const StyledLink = styled(NavLink)`
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.themeTextColor};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBg};
    color: ${({ theme }) => theme.colors.activeTextColor};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.themeColor};
    color: white;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <h4>Admin Panel</h4>
    <Nav className="flex-column">
      <StyledLink to="/dashboard">Dashboard</StyledLink>
      <StyledLink to="/dashboard/registered-users">Users</StyledLink>
    </Nav>
  </SidebarContainer>
);

export default Sidebar;
