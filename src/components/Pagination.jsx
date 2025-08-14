import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/Pagination.css";

const Pagination = ({ handleNext, handlePrev, pageNo }) => {
  return (
    <div className="icons">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="arrow"
        onClick={handlePrev}
      />
      <div className="pageNo">{pageNo}</div>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow"
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
