import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./Homepage";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img
          className="Logo"
          src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png"
          alt="Northcoders Logo"
        />
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
