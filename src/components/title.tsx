import styled from "styled-components";

type TitleProps = {
  subTitle?: string;
  title: string;
  colorTitle?: string;
  styles?: React.CSSProperties;
};

const Title = (props: TitleProps) => {
  return (
    <div>
      <h5>{props.subTitle}</h5>
      <h2 style={props.styles}>
        {props.title} <ColorTitle>{props.colorTitle}</ColorTitle>
      </h2>
    </div>
  );
};
export default Title;

const ColorTitle = styled.span`
  color: red;
`;
