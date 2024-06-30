import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import ScrollToTop from "../components/scroll-to-top";

const Layout = () => {
  return (
    <Wrapper>
      <ScrollToTop />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Main = styled.main``;
