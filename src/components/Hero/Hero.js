import React from "react";
import Carousel from "react-bootstrap/Carousel";

/* como poner los sliders */
const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
         className="d-block w-100"
          src="/assets/img/Slide_CARTHAGE-Bakuchiol-Familia.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
          src="/assets/img/Slide_CARTHAGE-Maltobionic-Peel.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
          src="/assets/img/Slide_CARTHAGE-Mascaras-Light-Code.jpg"
          alt="Thrid slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
