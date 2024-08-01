import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.0.jpg";
import slider4 from "../images/slider-4.jpg";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={slider1} alt="slider" />
        <Carousel.Caption>
          <SliderTitle>Welcome to Al-Huzaifi Academy</SliderTitle>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider2} alt="slider" />
        <Carousel.Caption>
          <SliderTitle>
            Crafted to nurture souls and spread excellency
          </SliderTitle>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider3} alt="slider" />
        <Carousel.Caption>
          <SliderTitle>
            Dedicated to provide you with the tools to explore the depth of
            Islamic Science
          </SliderTitle>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider4} alt="slider" />
        <Carousel.Caption>
          <SliderTitle>
            A guide to strengthen your connection with faith, empowering you to
            lead a life a purpose
          </SliderTitle>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const SliderTitle = styled.h3`
  // color: ${(props) => props.theme.colors.activeBg};
  color: #555d50;
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  font-weight: 400;

  ${mq("sm")} {
    color: #555d50;
    font-family: "Oswald", sans-serif;
    font-size: 24px;
    font-weight: 400;
  }

  ${mq("md")} {
    font-size: 32px;
    font-weight: 400;
    color: #555d50;
    font-family: "Oswald", sans-serif;
  }
`;
