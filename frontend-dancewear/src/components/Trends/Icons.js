import React from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = ({ previousCarouselItem, nextCarouselItem }) => {
  return (
    <div className="icons">
      <div className="previous" onClick={previousCarouselItem}>
      <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="next" onClick={nextCarouselItem }>
      <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}

export default Icons;