import React, { useState, useEffect, useContext } from "react";
import "../styles/App.scss";
import RenderList from "./Main/Main.jsx";
import DetailMovies from "./DetailMovies/DetailMovies.jsx";
import { Routes, Route } from "react-router-dom";
import GetDataApi from "../services/api.jsx";
import GenreFilter from "./Genre/GenreFilter.jsx"
import Filter from "../components/Filter/Filter.jsx"
import GetError from "../components/GetError/GetError.jsx"
import LoginError from "../components/LoginError/LoginError.jsx"
import Login from "../components/Login/Login.jsx"
import LoginError from "../components/LoginError/LoginError.jsx"
// import VipRoutes from "./VipRoutes/VipRoutes";
// import LoginContext from "./Context/LoginContext";


function App() {
  const [moviesData, setMoviesData] = useState([]);
 
  const url = "http://localhost:4000/moviesData";

  useEffect(() => {
    GetDataApi(url).then((resp) => {
      setMoviesData(resp.data);
    });
  }, [url]);

// const userLogin = useContext(LoginContext);

  return (
    <>
   
    <Routes>
    
      <Route path='/' element={<Login/>}/>

      <Route path='/main/' element={<RenderList moviesData={moviesData}/>}/>

      <Route path='/detail/:id' element={<DetailMovies moviesData={moviesData}/>}/>

      <Route path='/filter/:id' element={<Filter moviesData={moviesData}/>}/>

      <Route path='/genre' element={<GenreFilter moviesData={moviesData}/>}/>

      <Route path='/loginErr' element={<LoginError />}/>
      <Route path='*' element={<GetError />}/>
    </Routes>
    </>
  );
}
export default App;
