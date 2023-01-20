import React from "react";
import "./GenreFilter.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function GenreFilter({moviesData, setMoviesData}) {
  
  const [genre, setGenre] = useState("All");

  const handleGenre = (ev) => {
    setGenre(ev);
    filteredList(ev);
  };

  const filteredList = () => {
    const filterResults = moviesData.filter((element) => {
    if (genre === "All") {
      return true;
    } else {
      return element.genres.includes(genre);
    }
  });
  setMoviesData(filterResults);
};

  return (
    <>
      <label htmlFor="genre">Genre</label>
      <select
        name=""
        id="genre"
        onChange={(ev) => {
          handleGenre(ev.target.value);
        }}
        value={genre}
      >
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Adventure">Adventure</option>
        <option value="Romance">Romance</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="War">War</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Thriller">Thriller</option>
        <option value="Comedy">Comedy</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Short">Short</option>
        <option value="Documentary">Documentary</option>
        <option value="Music">Music</option>
        <option value="Musical">Musical</option>
        <option value="Family">Family</option>
        <option value="Experimental">Experimental</option>
        <option value="Horror">Horror</option>
        <option value="Mystery">Mystery</option>
        <option value="Sport">Sport</option>
      </select>
      <div className="btn1">
        <Link to="/">
          <button className="btn btn-dark">Home</button>
        </Link>
      </div>
    </>
  );
}

export default GenreFilter;
