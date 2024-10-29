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
              <Nav.Link
                as={NavLink}
                to="/why-choose-us"
                eventKey="why-choose-us"
              >
                About
              </Nav.Link>
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
                  <div>
                    <NavDropdown.Item href="/noorani-qaedah">
                      Noorani Qa'edah Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/recitation-course">
                      Quran Recitation Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/memorization-course">
                      Quran Memorization Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/tajweed-course">
                      Tajweed Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/seven-qiraat">
                      Seven Qiraats Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/ijazah-program">
                      Quran Ijazah Program
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/translation-course">
                      Quran's Translation Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/tafseer-course">
                      Tafseer Course
                    </NavDropdown.Item>
                  </div>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="Deeniyat Courses">
                  <NavDropdown.Item href="/deeniyat-for-kids">
                    Deeniyat For Kids
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/deeniyat-for-men">
                    Deeniyat For Men
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/deeniyat-for-women">
                    Deeniyat For Women
                  </NavDropdown.Item>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="Alimiyat Course">
                  <NavDropdown.Item href="/dars-e-nizami">
                    Dars-e-Nizami Curriculum
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/modern-curriculum">
                    Modern Curriculum
                  </NavDropdown.Item>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="Fazilat Courses">
                  <NavDropdown.Item href="/fazilat-in-tafsir">
                    Fazilat in Quranic Science
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/fazilat-in-hadith">
                    Fazilat in Hadith Science
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/fazilat-in-islamic">
                    Fazilat in Islamic Jurisprudence
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/fazilat-in-theology">
                    Fazilat in Theology
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/fazilat-in-islamic-finance">
                    Fazilat in Islamic Finance
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/fazilat-in-arabic-language">
                    Fazilat in Arabic Language
                  </NavDropdown.Item>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="Arabic Language Courses">
                  <NavDropdown.Item href="/arabic-language-course">
                    Foundation Arabic Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/arabic-speaking-course">
                    Arabic Speaking Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/quranic-arabic-course">
                    Quranic Arabic Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/classical-arabic-course">
                    Classical Arabic Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/arabic-grammar-course">
                    Arabic Grammar Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/arabic-blaghat-course">
                    Arabic Rhetoric (Balaghat) Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/arabic-arooz-qafiyah-course">
                    Arabic Prosody and Rhyme <br /> (Arooz & Qafiyah) Course
                  </NavDropdown.Item>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="English Language Courses">
                  <NavDropdown.Item href="/elementary-english-course">
                    Elementary English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/intermediate-english-course">
                    Intermediate English Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/advanced-english-course">
                    Advanced English Course
                  </NavDropdown.Item>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="Urdu Language Courses">
                  <NavDropdown.Item href="/elementary-urdu-course">
                    Elementary Urdu Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/intermediate-urdu-course">
                    Intermediate Urdu Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/advanced-urdu-course">
                    Advanced Urdu Course
                  </NavDropdown.Item>
                </SubMenu>
                <NavDropdown.Divider />
                <SubMenu title="Short Courses">
                  <NavDropdown.Item href="/ibadaat-course">
                    Ibadaat Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/zakat-course">
                    Zakat Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/ramadan-special-course">
                    Ramadan Special Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/hajj-&-umrah-course">
                    Hajj & Umrah Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/seerat-course">
                    Life of Prophet (Seerat) Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Inheritance (Meerath) Course
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Imamat Course</NavDropdown.Item>
                </SubMenu>
              </NavDropdownMenu>
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
                <NavDropdown.Item href="/scholarship-program">
                  Scholarship
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Acadmic Calender
                </NavDropdown.Item>
              </CustomDropdown>
              <CustomDropdown
                title="Darul-Ifta"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="/darul-ifta">
                  Ask Darul Ifta
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/ifta-course">
                  Ifta Course
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
  position: relative;
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
