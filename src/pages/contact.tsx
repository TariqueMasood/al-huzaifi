import styled from "styled-components";
import bgImg from "../../src/images/contact-bg-img.jpeg";

const Contact = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
    </>
  );
};

export default Contact;
const Image = styled.img`
  width: 100%;
`;
