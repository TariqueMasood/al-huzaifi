import styled from "styled-components";
import { PiUsersThin } from "react-icons/pi";

type cardProps = {
  counter: string;
  title: string;
  icon: React.ReactNode;
};

const AchievementCard = (props: cardProps) => {
  return (
    <Wrapper>
      <h1>{props.counter}</h1>
      <Title>{props.title}</Title>
      <CardCircle>
        <CircleIcon>{props.icon}</CircleIcon>
      </CardCircle>
    </Wrapper>
  );
};

export default AchievementCard;

const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  text-align: center;
  padding: 40px 20px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  position: relative;
`;

const CardCircle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #e5f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -22px;
  left: -20px;
`;

const CircleIcon = styled.span`
  font-size: 28px;
  color: blue;
`;

const Title = styled.span`
  font-size: 18px;
`;
