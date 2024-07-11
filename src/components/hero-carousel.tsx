import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";
import slider4 from "../images/slider-4.jpg";
import styled from "styled-components";

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={slider1} alt="slider" />
        <Carousel.Caption>
          <h3>First slider</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider2} alt="slider" />
        <Carousel.Caption>
          <h3>Second slider</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider3} alt="slider" />
        <Carousel.Caption>
          <h3>Third slider</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider4} alt="slider" />
        <Carousel.Caption>
          <h3>Fourth slider</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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
