import React from "react";
import { Container, Form } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const GetInTouch = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrap>
          <Heading>get in touch</Heading>
          <SubHeading>
            Get daily updates, Upcoming Events and Courses!
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
            <Submit type="submit">Submit</Submit>
          </FormContainer>
        </ContentWrap>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px 0px;
  // background-color: #eee;

  ${mq("sm")} {
    padding: 30px 0px;
  }

  ${mq("md")} {
    padding: 60px 0px;
  }
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.themeColor};

  ${mq("sm")} {
    font-size: 26px;
    font-weight: 700;
  }

  ${mq("md")} {
    font-size: 32px;
    font-weight: 700;
  }
`;

const SubHeading = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.yellowColor};

  ${mq("sm")} {
    font-size: 18px;
    padding: 12px 0px;
    font-weight: 500;
  }

  ${mq("md")} {
    font-size: 22px;
    padding: 20px 0px;
    font-weight: 600;
  }
`;

const FormContainer = styled.div`
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  text-align: center;
  margin: auto;
  // padding: 50px 30px;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ContentWrap = styled.div`
  max-width: 750px;
  margin: auto;
  padding: 7px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.themeColor};

  ${mq("sm")} {
    padding: 20px;
    border: 2px solid ${(props) => props.theme.colors.themeColor};
  }

  ${mq("md")} {
    padding: 30px;
    border: 3px solid ${(props) => props.theme.colors.themeColor};
  }
`;

const Submit = styled.button`
  padding: 6px 24px;
  margin: 20px 0px;
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

const StyledFormGroup = styled(Form.Group)`
  width: 100%;
  display: flex;
  align-items: center;
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
