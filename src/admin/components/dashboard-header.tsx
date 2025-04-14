import React from "react";
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
  return (
    <HeaderContainer>
      <h5>Admin Dashboard</h5>
      <div>User Profile</div>
    </HeaderContainer>
  );
};

export default DashboardHeader;
