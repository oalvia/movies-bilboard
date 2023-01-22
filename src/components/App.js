import { useState, useEffect } from "react";
import "../styles/App.scss";
import RenderList from "./Main/Main.jsx";
import DetailMovies from "./DetailMovies/DetailMovies.jsx";
import { Routes, Route } from "react-router-dom";
import GetDataApi from "../services/api.jsx";
import GenreFilter from "./Genre/GenreFilter.jsx";
import Filter from "../components/Filter/Filter.jsx";
import GetError from "../components/GetError/GetError.jsx";

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
      <Routes>
        <Route path="/" element={<RenderList moviesData={moviesData} />} />

        <Route
          path="/detail/:id"
          element={<DetailMovies moviesData={moviesData} />}
        />

        <Route
          path="/filter/:id"
          element={<Filter moviesData={moviesData} />}
        />

        <Route
          path="/genre/:id"
          element={<GenreFilter moviesData={moviesData} setMoviesData={setMoviesData} />}
        />

        <Route path="*" element={<GetError moviesData={moviesData} />} />
      </Routes>
    </>
  );
}
export default App;
