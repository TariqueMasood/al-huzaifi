import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { useState } from "react";
import logo from "../images/logo-2.png";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

const Header: React.FC = () => {
  // const { toggleTheme, theme } = useTheme();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = () => {
    handleClose();
  };

  return (
    <NavbarWrapper expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Logo src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-md`}
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Al-Huzaifi
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1"
              onSelect={handleSelect}
            >
              <Nav.Link as={NavLink} to="/" eventKey="home">
                Home
              </Nav.Link>
              <CustomDropdown
                title="About"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="/our-history">
                  Our History
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/our-mission">
                  Our Mission and Vision
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/our-team">Our Team</NavDropdown.Item>
              </CustomDropdown>
              <CustomDropdown
                title="Faculty"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="/faculty-of-quran">
                  Faculty of Quran
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/faculty-of-deeniyat">
                  Faculty of Deeniyat
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/faculty-of-alimiyat">
                  Faculty of Alimiyat
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/faculty-of-fazilat">
                  Faculty of Fazilat
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/faculty-of-language">
                  Faculty of Languages
                </NavDropdown.Item>
              </CustomDropdown>
              <NavDropdownMenu
                title="Programs"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <SubMenu title="Quran Courses">
                  <NavDropdown.Item href="/noorani-qaedah">
                    Noorani Qa'edah Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/recitation-course">
                    Quran Recitation Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Quran Memorization Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Tajweed Course</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Seven Qiraats Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Quran Ijazah Program
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Quran's Translation Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Tafseer Course</NavDropdown.Item>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="Deeniyat Courses">
                  <NavDropdown.Item href="#">Text</NavDropdown.Item>
                </SubMenu>
              </NavDropdownMenu>
              <CustomDropdown
                title="Darul-Ifta"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="#action3">Ask Fatwa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Contact to Mufti
                </NavDropdown.Item>
              </CustomDropdown>
              <CustomDropdown
                title="Publications"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="#action3">Articles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Booklets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Prospectus</NavDropdown.Item>
              </CustomDropdown>
              <CustomDropdown
                title="Admission"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="/registration">
                  Registration
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Tution Fee</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Scholarship</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Acadmic Calender
                </NavDropdown.Item>
              </CustomDropdown>

              <Nav.Link as={NavLink} to="/contact" eventKey="contact">
                Contact
              </Nav.Link>
              {/* <MyButton
                onClick={toggleTheme}
                title={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? <PiSunLight /> : <PiMoonLight />}
              </MyButton> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </NavbarWrapper>
  );
};

export default Header;

const NavbarWrapper = styled(Navbar)`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  background: ${(props) => props.theme.background} !important;
  border-bottom: 1px solid ${(props) => props.theme.toggleBorder};
  min-height: 4rem;

  .navbar {
    min-height: 60px;
  }

  .nav-link {
    color: ${(props) => props.theme.text};
    padding: 0.35rem 1rem !important;
    border-radius: 100px;

    &:hover {
      background-color: ${(props) => props.theme.secondaryBg};
    }

    &.active {
      background-color: ${(props) => props.theme.colors.activeBg};
      color: ${(props) => props.theme.colors.activeTextColor};
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.toggleBorder};
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.secondaryBg};
    font-size: 20px;
  }

  .navbar-nav {
    gap: 1rem;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: 50px;
`;

const SubMenu = styled(DropdownSubmenu)`
  cursor: pointer;
`;

const CustomDropdown = styled(NavDropdown)`
  .dropdown-menu {
    border: none;
    border-top: 2px solid ${(props) => props.theme.colors.darkbg};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .dropdown-divider {
    opacity: 0.3;
  }
`;
