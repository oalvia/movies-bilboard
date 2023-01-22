import React from "react";
import "./Main.scss";
import ButtonSearch from "../ButtonSearch/ButtonSearch.jsx";
import ButtonGenre from "../ButtonGenre/ButtonGenre.jsx";
import { Link } from "react-router-dom";

const RenderList = ({ moviesData }) => {
  return (
    <main>
      <div className="buttonSearch">
        <div className="logOutContainer">
          <Link to={`/`}>
            <button type="submit" className="logOut btn btn-primary">
              Log Out
            </button>
          </Link>
        </div>
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
          <>
            <div className="allMovies" key={index}>
              <h3>{item.title}</h3>
              <h3>{item.img}</h3>

              {console.log(item)}
              <img
                src={require(`../../images/${item.img}`)}
                alt={item.title}
                className="image"
              />
              <Link to={`/detail/${index}`}>
                <p className="show">Show more... </p>
              </Link>
            </div>
          </>
        ))}
        ;
      </div>
    </main>
  );
};
export default RenderList;
