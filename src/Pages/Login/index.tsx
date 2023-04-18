import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login_container">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="password" />
        <div className="btn">Login</div>
      </form>
      <p>
        Not already a member?{" "}
        <span>
          <Link to="/signup">Sign up</Link>
        </span>
      </p>
    </div>
  );
}

export default Login