import React from "react";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import useViewportWidth from "../hooks/use-viewport-width";

const About = () => {
  const isDesktopView = useViewportWidth("lg");
  return (
    <Wrapper>
      {isDesktopView ? "Desktop" : "Mobile"}
      About
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  background: red;

  ${mq("lg")} {
    background: yellow;
  }
`;
