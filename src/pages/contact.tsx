import styled from "styled-components";
import bgImg from "../../src/images/contact-bg-img.jpeg";
import { Container } from "react-bootstrap";
import { mq } from "../styles/breakpoints";
import Form from "react-bootstrap/Form";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Container>
        <FormContainer>
          <h3>
            We are here to help you. <br />
            Reach out anytime.
          </h3>
          <FormContainer>
            <StyledFormGroup controlId="firstName">
              <LabelField>
                <Form.Label>Name:</Form.Label>
              </LabelField>
              <InputField>
                <StyledFormControl
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </InputField>
            </StyledFormGroup>
            <StyledFormGroup controlId="email">
              <LabelField>
                <Form.Label>Email:</Form.Label>
              </LabelField>
              <InputField>
                <StyledFormControl
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </InputField>
            </StyledFormGroup>
            <StyledFormGroup controlId="text">
              <LabelField>
                <Form.Label>Subject:</Form.Label>
              </LabelField>
              <InputField>
                <StyledFormControl
                  type="text"
                  name="text"
                  placeholder="Subject"
                />
              </InputField>
            </StyledFormGroup>
            <StyledFormGroup controlId="textarea">
              <LabelField>
                <Form.Label>Subject:</Form.Label>
              </LabelField>
              <InputField>
                <StyledFormControl
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  style={{ height: "120px", padding: "12px" }}
                />
              </InputField>
            </StyledFormGroup>
          </FormContainer>
        </FormContainer>
        <EmailContact>
          <Row>
            <Col lg="6" md="6" sm="6">
              <ContactContainer>
                <a
                  href="https://wa.me/919535316943"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <FaWhatsapp />
                  </div>
                  <div>WhatsApp:</div>
                  <div>+91 9535316943</div>
                </a>
              </ContactContainer>
            </Col>
            <Col lg="6" md="6" sm="6">
              <ContactContainer>
                <a
                  href="mailto:info@alhuzaifi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <CiMail />
                  </div>
                  <div>Email:</div>
                  <div>info@alhuzaifi.com</div>
                </a>
              </ContactContainer>
            </Col>
          </Row>
        </EmailContact>
      </Container>
    </>
  );
};

export default Contact;
const Image = styled.img`
  width: 100%;
`;

const FormContainer = styled.div`
  text-align: center;
  margin: auto;
  padding: 20px 0px;
  max-width: 700px;
  width: 100%;

  ${mq("sm")} {
    padding: 30px 0px;
  }

  ${mq("md")} {
    padding: 40px 0px;
  }

  h3 {
    font-size: 18px;
    color: ${(props) => props.theme.colors.themeColor};
    font-weight: 600;

    ${mq("sm")} {
      font-size: 24px;
    }

    ${mq("md")} {
      font-size: 32px;
    }
  }
`;

const StyledFormGroup = styled(Form.Group)`
  width: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  margin: 20px 0px;
  gap: 12px;
`;

const LabelField = styled.div`
  max-width: 60px;
  width: 100%;
`;

const InputField = styled.div`
  width: 100%;
`;

const StyledFormControl = styled(Form.Control)`
  width: 100%;
`;

const EmailContact = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  padding: 30px 0px;
  font-size: 24px;
  // text-align: center;
  // display: flex;
  // justify-content: space-between;
`;

const ContactContainer = styled.div`
  max-width: 350px;
  width: 100%;
  margin: auto;
  text-align: center;
  border: 3px solid ${(props) => props.theme.colors.themeColor};
  border-radius: 8px;
  margin-top: 20px;

  div {
    padding: 5px 0px;
  }

  div:nth-child(1) {
    font-size: 48px;
    color: ${(props) => props.theme.colors.yellowColor};
  }

  div:nth-child(2) {
    font-weight: 700;
    color: ${(props) => props.theme.colors.themeColor};
  }

  div:nth-child(3) {
    font-weight: 700;
    color: ${(props) => props.theme.colors.yellowColor};
  }

  ${mq("md")} {
    margin: 16px 0px;
  }

  ${mq("sm")} {
    margin: 16px 0px;
  }
`;
