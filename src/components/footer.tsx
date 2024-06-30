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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit varius
              congue Morb
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
                <Link to="/#">Home</Link>
              </List>
              <List>
                <Link to="/#">About Us</Link>
              </List>
              <List>
                <Link to="/#">Courses</Link>
              </List>
              <List>
                <Link to="/#">Categories</Link>
              </List>
              <List>
                <Link to="/#">Pricing</Link>
              </List>
              <List>
                <Link to="/#">Contact</Link>
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
              708-210-9101
            </ContactIcon>
            <ContactIcon>
              <BsEnvelope />
              example@education.com
            </ContactIcon>
          </Col>
        </Row>
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
`;

const FooterTitle = styled.h4`
  margin-bottom: 20px;
  font-weight: 600;
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
  }
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 12px;
  font-size: 20px;
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

const CopyRight = styled.div`
  border-top: 1px solid ${(props) => props.theme.toggleBorder};
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
`;
