import React, { useEffect, useState } from "react";
import "../styles/Movies.css";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({list, handleAddtoWatchlist, handleRemoveFromWatchlist}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setpage_No] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setpage_No(1);
    }
    setpage_No(pageNo - 1);
  };

  const handleNext = () => {
    setpage_No(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=330910ba0cf5e9a62196429947b5b234&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="Movies">Trending Movies</div>
      <div className="MovieCards">
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} list={list} movieObj={movieObj} path={movieObj.poster_path} name={movieObj.title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>;
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext = {handleNext} handlePrev = {handlePrev} />
    </div>
  );
};

export default Movies;
