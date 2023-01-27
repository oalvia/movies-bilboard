import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import RenderList from "./Main/Main.jsx";
import DetailMovies from "./DetailMovies/DetailMovies.jsx";
import { Routes, Route } from "react-router-dom";
import GetDataApi from "../services/api.jsx";
import GenreFilter from "./Genre/GenreFilter.jsx";
import Filter from "./Filter/Filter.jsx";
import GetError from "./GetError/GetError.jsx";
import LoginError from "./LoginError/LoginError.jsx";
import Login from "./Login/Login.jsx";
import DataContext from "./Context/DataContext.jsx";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  const url = "http://localhost:4000/moviesData";

  useEffect(() => {
    GetDataApi(url).then((resp) => {
      setMoviesData(resp.data);
    });
  }, [url]);

  return (
    <>
      <DataContext.Provider value={moviesData}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/" element={<RenderList />} />
          <Route path="/detail/:id" element={<DetailMovies />} />
          <Route path="/filter/:id" element={<Filter />} />
          <Route path="/genre" element={<GenreFilter />} />
          <Route path="/loginErr" element={<LoginError />} />
          <Route path="*" element={<GetError />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}
export default App;
