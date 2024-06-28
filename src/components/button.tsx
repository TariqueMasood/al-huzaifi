import styled from "styled-components";

const MyButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 8px;

  &:hover {
    opacity: 0.7;
  }
`;

export default MyButton;
