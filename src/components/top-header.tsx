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
              <span>
                <FaRegUser />
              </span>
              <div>Login</div>
            </LoginBtn>
            <RegBtn
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <span>
                <FiUserPlus />
              </span>
              <div>Register</div>
            </RegBtn>
          </LoginRegister>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #004353;
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
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 24px;
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
