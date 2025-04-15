import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

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
  position = "top-center",
  delay = 3000,
}) => {
  return (
    <ToastContainer position={position} className="p-3">
      <Toast onClose={onClose} show={show} delay={delay} autohide>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
