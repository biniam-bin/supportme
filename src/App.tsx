import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout component={<Home />}/>}/>
        <Route path="/login" element={<Layout component={<Login />}/>}/>
        <Route path="/signup" element={<Layout component={<Signup />}/>}/>
      </Routes>
    </div>
  );
}

export default App;
