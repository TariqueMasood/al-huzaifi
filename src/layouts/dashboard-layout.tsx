import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Sidebar from "../admin/components/sidebar";
import DashboardHeader from "../admin/components/dashboard-header";
import DashboardFooter from "../admin/components/dashboard-footer";

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

const LayoutContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled(Container)`
  margin-left: 250px;
  padding: 2rem;
  margin-top: 60px;
  min-height: calc(100vh - 130px);
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 100%;
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;
