import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Sidebar from "../admin/components/sidebar";
import DashboardHeader from "../admin/components/dashboard-header";
import DashboardFooter from "../admin/components/dashboard-footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled(Container)`
  margin-left: 250px;
  padding: 2rem;
  min-height: calc(100vh - 130px); /* header + footer height */
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 100%; /* Ensure it doesn't exceed the viewport width */
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const DashboardLayout = () => {
  return (
    <LayoutContainer>
      <DashboardHeader />
      <ContentWrapper>
        <Sidebar />
        <MainContent fluid>
          <Outlet />
        </MainContent>
      </ContentWrapper>
      <DashboardFooter />
    </LayoutContainer>
  );
};

export default DashboardLayout;
