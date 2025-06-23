import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { GetInTouch } from "../components/get-in-touch";
import ScrollToTop from "../components/scrollToTop";
import WhatsAppChat from "../components/whatsapp-chat";

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
      <WhatsAppChat />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Main = styled.main``;
