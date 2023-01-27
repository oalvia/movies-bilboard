import React, { useEffect, useState, useContext } from "react";
import "./Filter.scss";
import { Link } from "react-router-dom";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import DataContext from "../Context/DataContext.jsx";

function FilterList() {
  const [moviesDataFilter, setMoviesDataFilter] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  const moviesData = useContext(DataContext);

  const getData = () => {
    setMoviesDataFilter(moviesData);
    setMovieList(moviesData);
  };

  const handleChange = (ev) => {
    setSearch(ev.target.value);
    filter(ev.target.value);
  };

  const filter = (filterSearch) => {
    const searchResults = movieList.filter((element) => {
      if (
        element.title
          .toString()
          .toLowerCase()
          .includes(filterSearch.toLowerCase()) ||
        element.year
          .toString()
          .toLowerCase()
          .includes(filterSearch.toLowerCase())
      ) {
        return element;
      }
    });
    setMoviesDataFilter(searchResults);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <body>
      <div className="imageContainer">
        <img
          className="mainImage"
          src="https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg"
          alt="Logo"
        />
      </div>
      <div className="search">
        <div className="seachMovies">
          <input
            className="inputForm"
            value={search}
            placeholder="Search movie or year"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="btn1">
        <Link to={`/main/`}>
          <button className="btn btn-light">Home</button>
        </Link>
      </div>

      <div className="listSearch">
        {moviesDataFilter.map((movie, index) => (
          <div className="allMoviesSearch" key={index}>
            <div>
              <img
                src={require(`../../images/${movie.img}`)}
                alt={movie.title}
                className="imgFilter"
              />
            </div>
            <div>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <p>Rating: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </body>
  );
}
export default FilterList;
