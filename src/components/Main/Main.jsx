import React, { useContext } from "react";
import "./Main.scss";
import ButtonSearch from "../ButtonSearch/ButtonSearch.jsx";
import ButtonGenre from "../ButtonGenre/ButtonGenre.jsx";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext.jsx";

const RenderList = () => {
  const moviesData = useContext(DataContext);

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
          <Link to={`/`}>
            <button type="submit" className="logOut btn btn-dark">
              Log Out
            </button>
          </Link>

          <ButtonSearch moviesData={moviesData} />
          <> </>
          <ButtonGenre moviesData={moviesData} />
        </div>
      </div>

      <div className="list">
        {moviesData.map((item, index) => (
          <div className="allMovies" key={index}>
            <h3>{item.title}</h3>
            <img
              src={require(`../../images/${item.img}`)}
              alt={item.title}
              className="image"
            />
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
