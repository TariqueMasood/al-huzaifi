import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col className="mb-4" lg={4} md={6} xs={12}>
            <FooterTitle>AL-Huzaifi</FooterTitle>
            <Tagline>
              an Online Islamic Education hub, where knowledge and faith
              converge in a seamless learning exprience. This academy is a
              pioneering institution, dedicated to offer a comprehensive
              curriculum......
              <ReadMore>
                <a href="/why-choose-us">Read More</a>
              </ReadMore>
            </Tagline>
            <FooterTitle>Follow Us On:</FooterTitle>
            <SocialIcon>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </SocialIcon>
          </Col>
          <Col className="mb-4" lg={4} md={6} xs={12}>
            <FooterTitle>Useful Links</FooterTitle>
            <UlList>
              <List>
                <Link to="/">Home</Link>
              </List>
              <List>
                <Link to="/why-choose-us">About</Link>
              </List>
              <List>
                <Link to="/registration">Registration</Link>
              </List>
              <List>
                <Link to="/tution-fee">Tution Fee</Link>
              </List>
              <List>
                <Link to="/scholarship-program">Scholarship</Link>
              </List>
              <List>
                <Link to="/acadmic-calendar">Acadmic Calendar</Link>
              </List>
              <List>
                <Link to="/darul-ifta">Ask Fatwa</Link>
              </List>
            </UlList>
          </Col>
          <Col className="mb-4" lg={4} md={6} xs={12}>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactIcon>
              <CiLocationOn />
              15 Rose StreetHarvey, IL 60426 USA
            </ContactIcon>
            <ContactIcon>
              <IoCallOutline />
              +91 9876543210
            </ContactIcon>
            <ContactIcon>
              <BsEnvelope />
              example@education.com
            </ContactIcon>
          </Col>
        </Row>
        <Divider></Divider>
      </Container>
      <CopyRight>
        <p> &copy; 2024 Al-Huzaifi. All rights reserved.</p>
      </CopyRight>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 40px 0px 20px 0px;
  border-top: 1px solid ${(props) => props.theme.toggleBorder};
  background-color: ${(props) => props.theme.colors.darkBg};
  color: ${(props) => props.theme.colors.themeTextColor};
  border-bottom: 1px solid ${(props) => props.theme.toggleBorder};
`;

const FooterTitle = styled.h4`
  margin-bottom: 20px;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
`;

const Tagline = styled.p`
  font-size: 18px;
  max-width: 300px;
  width: 100%;
  margin-bottom: 20px;
`;

const SocialIcon = styled.div`
  svg {
    cursor: pointer;
    font-size: 24px;
    margin-right: 32px;
    transition: all ease 0.4s;

    &:hover {
      color: ${(props) => props.theme.colors.themeColor};
    }
  }
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 12px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.themeTextColor};

  a:hover {
    color: ${(props) => props.theme.colors.themeColor};
    transition: all ease-in-out 0.4s;
  }
`;

const UlList = styled.ul`
  padding-left: 0px;
`;

const ContactIcon = styled.div`
  margin-bottom: 20px;
  font-size: 20px;

  svg {
    font-size: 24px;
    margin-right: 18px;
  }
`;

const ReadMore = styled.span`
  background-color: #fff;
  font-size: 12px;
  padding: 3px 7px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.themeColor};
  transition: ease-in 0.4s;

  &:hover {
    background-color: ${(props) => props.theme.colors.themeColor};
    color: #fff;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.themeTextColor};
  opacity: 0.2;
`;

const CopyRight = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
`;
