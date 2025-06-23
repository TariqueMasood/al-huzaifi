import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollButton show={showButton} onClick={scrollToTop}>
      ↑
    </ScrollButton>
  );
};

export default ScrollToTop;

const ScrollButton = styled.button<{ show: boolean }>`
  position: fixed;
  bottom: 100px;
  right: 36px;
  z-index: 1000;
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: ${(props) => props.theme.colors.themeColor};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;

  &:hover {
    // background-color: #0a7d9a;
    background-color: ${(props) => props.theme.colors.yellowColor};
  }
`;
