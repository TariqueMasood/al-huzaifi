import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import fLogo from "../../src/images/al-hozaifi-academy-logo-white.png";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col className="mb-4" lg={4} md={6} xs={12}>
            {/* <FooterTitle>AL-Huzaifi</FooterTitle> */}
            <FooterLogo src={fLogo} alt="image" />
            <Tagline>
              An online hub for authentic Islamic and academic education,
              serving a global community with a focus on faith, excellence, and
              holistic development.
              {/* <ReadMore>
                <a href="/why-choose-us">Read More</a>
              </ReadMore> */}
            </Tagline>
            <FooterTitle>Follow Us On:</FooterTitle>
            <SocialIcon>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/alhuzaifiacademy/?igsh=MWswMzl6NGM3Z25zcw%3D%3D&utm_source=qr#"
              >
                <FaInstagram />
              </a>
              {/* <FaTwitter /> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/alhuzaifiacademy?mibextid=wwXIfr&rdid=QVVmcr6dT9Z3LCEn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FGoKAA3Pg%2F%3Fmibextid%3DwwXIfr#"
              >
                <FaFacebookF />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@alhuzaifiacademy"
              >
                <FaYoutube />
              </a>
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
            {/* <ContactIcon>
              <CiLocationOn />
              15 Rose StreetHarvey, IL 60426 USA
            </ContactIcon> */}
            <ContactIcon>
              <a
                href="https://wa.me/919535316943"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                +91 9535316943
              </a>
            </ContactIcon>
            <ContactIcon>
              <a
                href="mailto:info@alhuzaifi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsEnvelope />
                info@alhuzaifi.com
              </a>
            </ContactIcon>
            <ContactIcon>
              <div style={{ marginBottom: "7px", fontWeight: "bold" }}>
                Our Offices
              </div>
              <ul>
                <li>USA</li>
                <li>India</li>
                <li>Egypt</li>
                <li>Turkiye</li>
              </ul>
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
  // background-color: ${(props) => props.theme.colors.darkBg};
  background-color: ${(props) => props.theme.colors.themeColor};
  color: ${(props) => props.theme.colors.themeTextColor3};
  border-bottom: 1px solid ${(props) => props.theme.toggleBorder};
`;

const FooterTitle = styled.h4`
  margin-bottom: 20px;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
`;

const FooterLogo = styled.img`
  max-width: 250px;
  width: 100%;
`;

const Tagline = styled.p`
  font-size: 18px;
  max-width: 300px;
  width: 100%;
  // margin-bottom: 20px;
  margin: 20px 0px;
`;

const SocialIcon = styled.div`
  svg {
    cursor: pointer;
    font-size: 24px;
    margin-right: 32px;
    transition: all ease 0.4s;

    &:hover {
      color: ${(props) => props.theme.colors.themeColor3};
    }
  }
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 12px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.themeTextColor3};

  a:hover {
    color: ${(props) => props.theme.colors.themeColor3};
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

// const ReadMore = styled.span`
//   background-color: #fff;
//   font-size: 12px;
//   padding: 3px 7px;
//   border-radius: 6px;
//   color: ${(props) => props.theme.colors.themeColor};
//   transition: ease-in 0.4s;

//   &:hover {
//     background-color: ${(props) => props.theme.colors.themeColor};
//     color: #fff;
//   }
// `;

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
