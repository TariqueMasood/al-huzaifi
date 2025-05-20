import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Page ko top par scroll karta hai
  }, []);

  return null;
};

export default ScrollToTop;
