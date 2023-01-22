import React from "react";
import "./GenreFilter.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function GenreFilter({ moviesData }) {
  const [genre, setGenre] = useState("All");

  const handleGenre = (ev) => {
    setGenre(ev.target.value);
  };

  const filteredList = moviesData.filter((element) => {
    if (genre === "All") {
      return true;
    } else {
      return element.genres.includes(genre);
    }
  });

  return (
    <main>
      <div className="imageContainer">
        <img
          className="mainImage"
          src="https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg"
          alt="Logo"
        />
      </div>
      <label htmlFor="genre" className="labelGenre">Genre</label>
      <select name="" id="genre" onChange={handleGenre} value={genre}>
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
      <>
        <div>
          <div className="btn1">
            <Link to={`/main/`}>
              <button className="btn btn-light">Home</button>
            </Link>
          </div>
          {filteredList.map((movie, index) => (
            <div key={index} className="genreFilterContainer">
              <div className="allMoviesGenre">
                <div>
                  <img
                    src={require(`../../images/${movie.img}`)}
                    alt={movie.title}
                    className="genreFilterImage"
                  />
                </div>

                <div>
                  <h3>Title: {movie.title}</h3>
                  <p>Year: {movie.year}</p>
                  <p>Genre: {movie.genres}</p>
                  <p>Rating: {movie.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </main>
  );
}

export default GenreFilter;
