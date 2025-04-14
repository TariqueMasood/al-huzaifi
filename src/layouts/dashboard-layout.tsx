import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Sidebar from "../admin/components/sidebar";
import DashboardHeader from "../admin/components/dashboard-header";
import DashboardFooter from "../admin/components/dashboard-footer";

const MainContent = styled(Container)`
  margin-left: 250px;
  padding: 2rem;
  min-height: calc(100vh - 130px); /* header + footer height */
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <DashboardHeader />
      <MainContent fluid>
        <Outlet />
      </MainContent>
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
