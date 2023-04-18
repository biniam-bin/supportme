import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup_container">
      <h1>Sign up</h1>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="repeat password" />
        <div className="btn">signup</div>
      </form>
      <p>
        already have an account? {" "}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
}

export default Signup;
