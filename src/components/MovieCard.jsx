import React, { useState } from "react";
import card1 from "../assets/card1.webp";
import "../styles/MovieCard.css";

const MovieCard = ({
  list,
  movieObj,
  path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
}) => {
  const doesContain = (movieObj) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == movieObj.id) return true;
      else false;
    }
  };

  
  return (
    <div>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/original/${path}`}></img>
         
        {doesContain(movieObj) ? (
          <div
            className="emoji"
            onClick={() => handleRemoveFromWatchlist(movieObj)}
          >
            &#10060;
          </div>
        ) : (
          <div className="emoji" onClick={() => handleAddtoWatchlist(movieObj)}>
            &#128525;
          </div>
        )}

        <div className="title">{name}</div>
       
      </div>
    </div>
  );
};

export default MovieCard;
