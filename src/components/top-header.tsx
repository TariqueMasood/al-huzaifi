import React from "react";
import { Container } from "react-bootstrap";
import { FiUserPlus } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaRegUser,
  FaWhatsapp,
} from "react-icons/fa";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const TopHeader = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <SocialIcon>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.whatsapp.com/">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin />
            </a>
          </SocialIcon>
          <LoginRegister>
            <LoginBtn
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <FaRegUser />
              <div>Login</div>
            </LoginBtn>
            <RegBtn
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <FiUserPlus />
              <div>Register</div>
            </RegBtn>
          </LoginRegister>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.themeColor};
  color: #f2f2f2;
  padding: 7px 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoginRegister = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 12px;

  ${mq("md")} {
    font-size: 16px;
  }
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20x;

  ${mq("md")} {
    gap: 24px;
    font-size: 24px;
  }

  a {
    transition: all ease-in-out 0.4s;
  }

  a:hover {
    color: rgb(133, 156, 162);
  }
`;

const LoginBtn = styled.button`
  background: transparent;
  border: none;
  color: #f2f2f2;
`;

const RegBtn = styled.button`
  background: transparent;
  border: none;
  color: #f2f2f2;
`;
