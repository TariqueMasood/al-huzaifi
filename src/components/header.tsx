import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/theme-context";
import { PiMoonLight, PiSunLight } from "react-icons/pi";
import MyButton from "./button";
import styled from "styled-components";
import { useState } from "react";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = () => {
    handleClose();
  };

  return (
    <NavbarWrapper
      expand="md"
      className={`${theme === "dark" ? "dark" : "light"}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Al-Huzaifi
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
              <Nav.Link as={NavLink} to="/about" eventKey="about">
                About
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <MyButton
                onClick={toggleTheme}
                title={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? <PiSunLight /> : <PiMoonLight />}
              </MyButton>
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

  &.dark {
    background: ${(props) => props.theme.colors.black} !important;

    .nav-link,
    .navbar-brand {
      color: ${(props) => props.theme.colors.white};
    }
  }

  &.light {
    background: ${(props) => props.theme.colors.white} !important;

    .nav-link,
    .navbar-brand {
      color: ${(props) => props.theme.colors.black};
    }
  }
`;
