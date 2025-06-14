import RegistrationForm from "../components/registration-form";
import bgImg from "../../src/images/regustration-bg-img2.jpg";
import styled from "styled-components";

const Registration = () => {
  return (
    <Wrapper>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <RegistrationForm />
    </Wrapper>
  );
};

export default Registration;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
`;
