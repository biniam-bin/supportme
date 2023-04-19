import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Detail from "./Pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout component={<Home />}/>}/>
        <Route path="/login" element={<Layout component={<Login />}/>}/>
        <Route path="/signup" element={<Layout component={<Signup />}/>}/>
        <Route path="/:username" element={<Layout component={<Detail />}/>}/>
      </Routes>
    </div>
  );
}

export default App;
