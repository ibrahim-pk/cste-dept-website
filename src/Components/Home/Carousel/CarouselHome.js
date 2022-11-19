import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CounterStat from "../CounterStat/CounterStat";

export default function CarouselHome() {
  return (
    <div className="w-full">
      <Carousel>
        <div>
          <img
            src="https://www.nstu.edu.bd/assets/images/slider/mural.JPG"
            className="sliderImage"
          />
        </div>
        <div>
          <img
            src="https://www.nstu.edu.bd/assets/images/slider/mural.JPG"
            className="sliderImage"
          />
        </div>
      </Carousel>
      <div className="mx-auto w-full text-center mt-[-50px] zIndexInc">
        <CounterStat />
      </div>
    </div>
  );
}
