import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import viteLogo from "/vite.svg";
import "./App.css";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [list, setlist] = useState([]);
  const handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...list, movieObj];
    localStorage.setItem("myMovies", JSON.stringify(newWatchlist));
    setlist(newWatchlist);
    console.log([newWatchlist]);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = list.filter((movie) => {
      return movie.id != movieObj.id;
    });

    localStorage.setItem("myMovies", JSON.stringify(filteredWatchlist));
    setlist(filteredWatchlist);
    console.log([filteredWatchlist]);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("myMovies");
    if (!moviesFromLocalStorage) return;
    setlist(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  list={list}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                list={list}
                setlist={setlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/popular?api_key=330910ba0cf5e9a62196429947b5b234&language=en-US&page=1
