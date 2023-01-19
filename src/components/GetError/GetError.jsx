import React from "react";
import "./GetError.scss";
import { Link } from "react-router-dom";

const GetError = () => {
  return (
    <main className="main">
      <div className="error">
      <h3 className="errorText">ERROR</h3>
      <img className="imageError" src='https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_1280.png' alt="Error Logo" />
      <div>

      </div>
        <Link to="/">
          <button class="btn btn-dark">Go Home</button>
        </Link>
      </div>
    </main>
  );
};
export default GetError;
