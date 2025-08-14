import React from "react";
import banner from "../assets/banner.jpg";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <>
      <div className="image">
        <img src={banner}></img>
        <div className="text">Avengers</div>
      </div>
   </>
  );
};

export default Banner;
