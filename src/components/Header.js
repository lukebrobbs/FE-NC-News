import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./Homepage";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <Link to={"/"}>
          <img
            className="Logo"
            src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png"
            alt="Northcoders Logo"
          />
        </Link>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
