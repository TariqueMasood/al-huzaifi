import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { GetInTouch } from "../components/get-in-touch";
import WhatsAppChat from "../components/whatsapp-chat";
import ScrollToTop from "../components/scroll-to-top";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <GetInTouch />
      <Footer />
      <ScrollToTop />
      <WhatsAppChat />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Main = styled.main``;
