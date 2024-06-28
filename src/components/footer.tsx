import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Wrapper>Footer</Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  color: red;
`;
