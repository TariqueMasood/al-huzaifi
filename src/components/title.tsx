import styled from "styled-components";
import { mq } from "../styles/breakpoints";

type TitleProps = {
  subTitle?: string;
  title: string;
  colorTitle?: string;
  styles?: React.CSSProperties;
};

const Title = (props: TitleProps) => {
  return (
    <TitleWrapper>
      <SubHeading>{props.subTitle}</SubHeading>
      <Heading>
        {props.title} <ColorTitle>{props.colorTitle}</ColorTitle>
      </Heading>
    </TitleWrapper>
  );
};
export default Title;

const TitleWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.themeColor};
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  padding: 16px 0px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.activeBg};

  // ${mq("sm")} {
  //   padding: 20px 0px;
  // }

  // ${mq("md")} {
  //   padding: 16px 0px;
  // }
`;

const Heading = styled.h1``;

const SubHeading = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const ColorTitle = styled.span`
  // color: ${(props) => props.theme.colors.activeBg};
`;
