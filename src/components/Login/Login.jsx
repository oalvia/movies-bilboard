import { Link } from "react-router-dom";
import "./Login.scss";


const Login = () => {
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
        <form className="login">
          <div className="email">
            <label className="label"> Email address: </label>
            <input type="email"></input>
          </div>
          <div className="email">
            <label for="inputPassword">Password:</label>
            <input type="password"></input>
          </div>
          <Link to={`/main/`}>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
};
export default Login;
