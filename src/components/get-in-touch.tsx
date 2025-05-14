import React from "react";
import { Container, Form } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const GetInTouch = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>get in touch</Heading>
        <SubHeading>
          Get daily updates & Upcoming Events and Courses!
        </SubHeading>
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
          <Submit type="submit">Register</Submit>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 60px 0px;
  background-color: #eee;
`;

const Heading = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-transform: capitalize;
`;

const SubHeading = styled.div`
  font-size: 22px;
  padding: 20px 0px;
`;

const Submit = styled.button`
  padding: 6px 24px;
  margin: 24px 0px;
  border: 1px solid ${(props) => props.theme.colors.themeColor};
  color: ${(props) => props.theme.colors.themeColor};
  background-color: #ffffff;
  border-radius: 8px;
  transition: all ease-in 0.4s;

  &:hover {
    background-color: ${(props) => props.theme.colors.themeColor};
    color: #fff;
  }

  ${mq("md")} {
    padding: 9px 36px;
    margin: 24px 0px;
    border: 1px solid ${(props) => props.theme.colors.themeColor};
    color: ${(props) => props.theme.colors.themeColor};
    background-color: #ffffff;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    transition: all ease-in 0.4s;
  }
`;

const FormContainer = styled.div`
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  text-align: center;
  margin: auto;
  padding: 50px 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const StyledFormGroup = styled(Form.Group)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  gap: 20px;
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
