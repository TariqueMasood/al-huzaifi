import React from "react";
import LinkItem from "./LinkItem";
import Contact from "./contact";

const Footer = () => {
  const links = [
    { href: "#", text: "Home" },
    { href: "#", text: "About Us" },
    { href: "#", text: "Courses" },
    { href: "#", text: "Categories" },
    { href: "#", text: "Pricing" },
    { href: "#", text: "Contact" },
    { href: "#", text: "Resources" },
    { href: "#", text: "Community" },
    { href: "#", text: "Support" },
    { href: "#", text: "Video Guides" },
    { href: "#", text: "Terms and Conditions" },
    { href: "#", text: "Blog" },
    { href: "#", text: "Security" },
  ];

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div>
          <h3>Useful Links:</h3>
          <ul style={listStyle}>
            {links.map((link, index) => (
              <LinkItem key={index} href={link.href} text={link.text} />
            ))}
          </ul>
        </div>
        <Contact />
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#f8f8f8",
  padding: "20px",
  textAlign: "left",
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
};

export default Footer;
