import React, { useState, useEffect } from "react";
import { useViewport } from "../utils/viewportContext";
// import { useViewport } from "../utils/customHooks";
import Carousel from "react-bootstrap/Carousel";
import jumbo_logo from "../assets/images/pizza-baby-logo-white.png";
import c1 from "../assets/images/carousel/carousel-1.jpg";
import c2 from "../assets/images/carousel/carousel-2.jpg";
import c3 from "../assets/images/carousel/carousel-3.jpg";
import c4 from "../assets/images/carousel/carousel-4.jpg";


function Jumbotron() {
  const { width, height } = useViewport();
  const breakpoint = 768;
  
  return (
    <div className="jumbotron" id="jumbotron">
      <img
        src={jumbo_logo}
        className="jumbotron__logo"
        alt="Pizza Baby restaurant logo"
      />
      <div className="jumbotron__motto motto--mobile">
        pizza for the people!
      </div>
      <div className="jumbotron__motto motto--tablet">
        modern style pizza, meticulously-sourced ingredients.<br></br>
        full-service, beer, wine, & groovy music
      </div>
      <Carousel
        className="jumbotron__carousel"
        as={"section"}
        indicators={width >= breakpoint ? true : false}
        pause={false}
        keyboard={false}
        fade
        variant="dark"
        // nextIcon={nextIcon}
        // prevIcon={prevIcon}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={c1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Hey guys, want to show these slide captions?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>They're optional</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Like just about everything else you see.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c4} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Let me know!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Jumbotron;
