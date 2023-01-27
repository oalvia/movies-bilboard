import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailMovies.scss";
import DataContext from "../Context/DataContext.jsx";

const DetailMovies = () => {
  const moviesData = useContext(DataContext);
  const params = useParams();
  const movie = moviesData.find((mov) => mov.id === parseInt(params.id));
  const [image, setImage] = useState(movie.img);

  return (
    <body>
      <div className="container">
        <div className="imageContainer">
          <img
            className="mainImage"
            src="https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg"
            alt="Logo"
          />
        </div>
        <div className="imageContainer">
          <img
            src={require(`../../images/${image}`)}
            alt={movie.title}
            className="imageDetail"
          />
        </div>

        <div className="allMoviesDetail">
          <p className="whiteColor">Title: {movie.title}</p>
          <p className="whiteColor">Year: {movie.year}</p>
          <p className="whiteColor">Genre: {movie.genres.join(" - ")}</p>
          <p className="whiteColor">Director: {movie.director}</p>
          <p className="whiteColor">Rating: {movie.rating}</p>
          <p>
            <Link to={`/main/`}>
              <button className="btn btn-light btn-detail">Home</button>
            </Link>
          </p>
        </div>
      </div>
    </body>
  );
};

export default DetailMovies;
