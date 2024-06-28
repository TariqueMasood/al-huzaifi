import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/theme-context";
import { PiMoonLight, PiSunLight } from "react-icons/pi";
import MyButton from "./button";
import styled from "styled-components";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <NavbarWrapper expand="md" className="bg-body-tertiary mb-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Al-Huzaifi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Al-Huzaifi
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
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
  background: ${(props) => props.theme.colors.white} !important;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`;
