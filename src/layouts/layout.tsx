import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import ScrollToTop from "../components/scroll-to-top";
import { GetInTouch } from "../components/get-in-touch";

const Layout = () => {
  return (
    <Wrapper>
      <ScrollToTop />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <GetInTouch />
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Main = styled.main``;
