import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import GetDataApi from "../../services/api.jsx";
import Carousel from "../Carousel/Carousel.jsx";
// import App from "../App";
// import LoginContext from "../Context/LoginContext.jsx";
// import RenderList from "../Main/Main";
// import GenreFilter from "../Genre/GenreFilter";
// import FilterList from "../Filter/Filter";

const Login = () => {
  const url = "http://localhost:4000/usersRegister";

  useEffect(() => {
    GetDataApi(url).then((resp) => {
      setUserList(resp.data);
    });
  }, [url]);

  const [userList, setUserList] = useState([]);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const handleChange = (ev) => {
    setUserLogin({ ...userLogin, [ev.target.id]: ev.target.value });
  };

  const navigate = useNavigate();

  const handleClick = (ev) => {
    ev.preventDefault();
    const foundUser = userList.find((user) => {
      return (
        user.email === userLogin.email && user.password === userLogin.password
      );
    });
    console.log(foundUser);
    if (foundUser) {
      setUserLogin(foundUser);
      navigate ('/main');
    } else {
      setLoginError("Email o clave invalida!");
      navigate ('/loginErr');
    }
    return console.log(userLogin);
  };



  return (
    <main>
      <div className="imageContainer">
        <img
          className="mainImage"
          src="https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg"
          alt="Logo"
        />
      </div>
      <div className="containerForm">
        <form className="login" actions="">
          <div className="email">
            <label className="label" htmlFor="email">
              {" "}
              Email address:{" "}
            </label>
            <input type="email" id="email" onChange={handleChange}></input>
          </div>
          <div className="email">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
            ></input>
          </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Login
            </button>
        </form>
      </div>
      {/* <div className="carousel">
        <Carousel/>
      </div> */}
    </main>
  );
};
export default Login;
