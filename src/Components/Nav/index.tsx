import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav_container">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img src="/favicon.ico" alt="" />
          </Link>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>
            FAQ
          </li>
          <li><Link to="/login">Login</Link></li>
          <li className="btn"><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
