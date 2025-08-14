import React, { useEffect, useState } from "react";
import "../styles/Watchlist.css";
import banner from "../assets/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import genreids from "../utilities/genre.js";

const Watchlist = ({ list, setlist, handleRemoveFromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setgenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleCurrGenre = (genre) => {
    setCurrGenre(genre);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortIncreasing = () => {
    let sortIncreasing = [...list].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average; //a>b (+ve) swap = b,a  ascending order, a<b (-ve) a, b ascending order
    });
    setlist(sortIncreasing);
  };

  const sortDecreasing = () => {
    let sortDecreasing = [...list].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average; // b>a (+ve) swap = b,a descending, b<a (-ve) a, b descending
    });
    setlist(sortDecreasing);
  };

  useEffect(() => {
    let temp = list.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [list]);
  return (
    <>
      <div>
        <div className="options">
          {genreList.map((genre) => {
            return (
              <button
                onClick={() => handleCurrGenre(genre)}
                className={currGenre == genre ? "selected" : "unselected"}
              >
                {genre}
              </button>
            );
          })}
        </div>
        <div className="inputbox">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search for movies"
          ></input>
        </div>
        <div className="tablepart">
          <table>
            <thead>
              <tr>
                <th>Movie</th>
                <th>
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="arrow"
                      onClick={sortIncreasing}
                    />
                    <div className="ratings">Ratings</div>
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="arrow"
                      onClick={sortDecreasing}
                    />
                  </div>
                </th>

                <th>Popularity</th>
                <th>Genre</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="body">
              {list
                .filter((movieObj) => {
                  if (currGenre == "All Genres") return true;
                  else {
                    return genreids[movieObj.genre_ids[0]] == currGenre;
                  }
                })
                .filter((movieObj) => {
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((movieObj, index) => (
                  <tr key={index}>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          className="pic"
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                          alt={movieObj.original_title}
                        />
                        <span style={{ fontWeight: "bold" }}>
                          {movieObj.original_title}
                        </span>
                      </div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromWatchlist(movieObj)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
