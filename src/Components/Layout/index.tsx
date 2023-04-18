import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "./style.css";

function Layout({ component }: any) {
  return (
    <div className="layout_container">
      <div className="layout_wrapper">
        <Nav />
        {component}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
