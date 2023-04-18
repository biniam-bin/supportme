import React from "react";
import "./style.css";
import { BsFacebook } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";

function Footer() {
  return (
    <div className="footer_container">
      <img src="/favicon.ico" alt="" />
      <p>&copy; Support me</p>
      <div className="icons">
        <div className="icon">
          <BsFacebook />
        </div>
        <div className="icon">
          <ImYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer;
