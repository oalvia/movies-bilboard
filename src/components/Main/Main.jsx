import React from "react";
import "./Main.scss";
import ButtonSearch from "../ButtonSearch/ButtonSearch.jsx";
import ButtonGenre from "../ButtonGenre/ButtonGenre.jsx";
import { Link } from "react-router-dom";

const RenderList = ({ moviesData }) => {
  return (
    <main>
      <div className="buttonSearch">
        <div className="imageContainer">
          <img
            className="mainImage"
            src="https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg"
            alt="Logo"
          />
        </div>

        <div className="button">
          <ButtonSearch moviesData={moviesData} />
          <> </>
          <ButtonGenre moviesData={moviesData} />
        </div>
      </div>

      <div className="list">
        {moviesData.map((item, index) => (
          <div className="allMovies">
            <h3>{item.title}</h3>
            <img src={item.image} alt="" className="imgList" />
            <Link to={`/detail/${index}`}>
              <p className="show">Show more... </p>
            </Link>
          </div>
        ))}
        ;
      </div>
    </main>
  );
};
export default RenderList;
