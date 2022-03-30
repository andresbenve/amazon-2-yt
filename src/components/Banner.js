import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-800 to transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/esculturaNegra.png"
            alt=""
          />
        </div>
        <div>
          <img
            height="20"
            width="20"
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/esculturaNegra.png"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/esculturaNegra.png"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
