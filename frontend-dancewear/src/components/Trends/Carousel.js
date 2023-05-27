import React, { useState, useEffect } from "react";
import CarouselContent from "./CarouselContent";
import Icons from "./Icons";
import trends from "./TrendingData";
import "./Carousel.css";


const data = trends.length - 1;

const Carousel = () => {

  const [current, setCurrent] = useState(0);

  
  return (
    <div className="carousel-container">

      <CarouselContent current={current} trends={trends} />

      <Icons
        previousCarouselItem={() =>
          setCurrent(current < 1 ? data : current - 1)
        }
        
        nextCarouselItem={() =>
          setCurrent(current === data ? 0 : current + 1)
        }
      />
    </div>
  );
};
export default Carousel;
