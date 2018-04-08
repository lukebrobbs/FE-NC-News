import React, { Component } from "react";
import "../styles/HomePage.css";
import Articles from "./Articles";
import NavBar from "./NavBar";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar auth={this.props.auth} />
        <div className="home-body">
          <h1 className="header">/home</h1>
          <h2 className="sub-header">Hot articles</h2>
          <Articles type="all" />
        </div>
      </div>
    );
  }
}

export default HomePage;
