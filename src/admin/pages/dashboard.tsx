import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <h2>Welcome to the Dashboard</h2>
      <p>This is a protected route.</p>
    </DashboardContainer>
  );
};

export default Dashboard;
