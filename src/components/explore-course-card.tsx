import styled from "styled-components";
import { mq } from "../styles/breakpoints";

type CardProps = {
  cardImage: string;
  cardTitle: string;
  cardSubTitle: string;
  link: string;
};

const ExploreCourseCard = (props: CardProps) => {
  return (
    <CardWraaper>
      <CardCotainer>
        <CardImage src={props.cardImage} alt="Image1" />
      </CardCotainer>
      <CardTitle href="link">{props.cardTitle}</CardTitle>
      <CardSubtitle>{props.cardSubTitle}</CardSubtitle>
    </CardWraaper>
  );
};

export default ExploreCourseCard;

const CardWraaper = styled.div`
  ${mq("lg")} {
    max-width: 280px;
    width: 100%;
    border: 1px solid #5d5d5d;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;
    margin-bottom: 20px;
    margin-right: 24px;
  }

  min-width: 230px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.toggleBorder};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  margin-bottom: 20px;
  margin-right: 24px;

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.themeColor};
  }
`;

const CardImage = styled.img`
  width: 50px;
`;

const CardCotainer = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: #fef2f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.a`
  cursor: pointer;
  padding: 20px 0px;
  margin-bottom: 0;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  transition: all ease 0.5s;

  &:hover {
    color: ${(props) => props.theme.colors.themeColor};
  }
`;

const CardSubtitle = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.themeColor};
  text-decoration: underline;
`;
