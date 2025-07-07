import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styled from "styled-components";

interface ToastProps {
  message: string | null;
  show: boolean;
  onClose: () => void;
  position?:
    | "top-start"
    | "top-center"
    | "top-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
  delay?: number;
}

const CustomToast: React.FC<ToastProps> = ({
  message,
  show,
  onClose,
  delay = 5000,
}) => {
  return (
    <StyledToastContainer>
      <StyledToast show={show} onClose={onClose} delay={delay} autohide>
        <StyledToastBody>{message}</StyledToastBody>
      </StyledToast>
    </StyledToastContainer>
  );
};

const StyledToastContainer = styled.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: auto;
  max-width: 90vw;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

const StyledToast = styled(Toast)`
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  pointer-events: all;
`;

const StyledToastBody = styled(Toast.Body)`
  background: ${(props) =>
    props.theme.colors.themeColor || "#2563eb"} !important;
  color: #fff !important;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  padding: 16px 32px !important;
  pointer-events: all;
`;

export default CustomToast;
