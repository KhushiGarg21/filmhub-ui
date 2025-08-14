import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo}></img>
        <Link to="/"> Movies </Link>
        <Link to="/watchlist"> Watchlist </Link>
      </div>
    </>
  );
}
