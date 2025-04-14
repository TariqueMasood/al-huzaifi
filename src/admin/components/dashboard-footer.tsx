import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.themeTextColor};
  text-align: center;
  padding: 1rem;
  margin-left: 250px;
  border-top: 1px solid ${({ theme }) => theme.colors.themeTextColor};
`;

const DashboardFooter = () => (
  <FooterContainer>
    &copy; 2025 Admin Dashboard. All rights reserved.
  </FooterContainer>
);

export default DashboardFooter;
