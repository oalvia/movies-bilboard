import React from "react";
import "./LoginError.scss";
import { Link } from "react-router-dom";

const LoginError = () => {
  return (
    <main className="main">
      <div className="error">
      <h3 className="errorText">WRONG EMAIL OR PASSWORD</h3>
      <img className="imageError" src="https://images.unsplash.com/photo-1658154852796-edbd6ceb17f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="Error Logo" />
      <div>

      </div>
        <Link to="/">
          <button className="btn btn-dark">Go Home</button>
        </Link>
      </div>
    </main>
  );
};
export default LoginError;
