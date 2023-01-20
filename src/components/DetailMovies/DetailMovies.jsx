import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailMovies.scss";

const DetailMovies = ({ moviesData }) => {
  const params = useParams();
  const movie = moviesData.find((mov) => mov.id === parseInt(params.id));

  const [image, setImage] = useState(movie.img);

  return (
    <body className="main">
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
            className="image"
          />
        </div>

        <div className="allMoviesDetail">
          <p>Title: {movie.title}</p>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genres}</p>
          <p>Rating: {movie.rating}</p>
          <p>
            <Link to="/">
              <button className="btn btn-light">Home</button>
            </Link>
          </p>
        </div>
      </div>
    </body>
  );
};

export default DetailMovies;
