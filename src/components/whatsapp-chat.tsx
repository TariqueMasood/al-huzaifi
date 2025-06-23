import styled from "styled-components";
import whatsappIcon from "../images/whatsapp-icon.webp";

const WhatsAppChat = () => {
  const phoneNumber = "919044536943";
  const message = "Hello, I want to know more about your services!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <ChatWrapper>
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" width={50} height={50} />
      </a>
    </ChatWrapper>
  );
};

export default WhatsAppChat;

const ChatWrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 24px;
  z-index: 1050; /* higher than modals, navbars */
  background-color: #25d366;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    display: block;
  }
`;
