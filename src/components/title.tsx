import styled from "styled-components";

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
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  padding: 60px 0px;
  text-align: center;
`;

const Heading = styled.h1``;

const SubHeading = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const ColorTitle = styled.span`
  color: ${(props) => props.theme.colors.themeColor};
`;
