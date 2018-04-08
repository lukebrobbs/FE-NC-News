import React, { Component } from "react";
import "../styles/HomePage.css";
import Articles from "./Articles";

class HomePage extends Component {
  render() {
    return (
      <div className="home-body">
        <h1 className="header">/home</h1>
        <h2 className="sub-header">Hot articles</h2>
        <Articles type="all" />
      </div>
    );
  }
}

export default HomePage;
