import React, { Component } from "react";
import "../styles/HomeBody.css";
import Articles from "./Articles";
import NewArticleButton from "./NewArticleButton";
import Header from "./Header";

class HomeBody extends Component {
  render() {
    return (
      <div className="home-body">
        <Header />
        <h1 className="header">/home</h1>
        <h2 className="sub-header">Hot articles</h2>
        <NewArticleButton />
        <Articles topics="all" />
      </div>
    );
  }
}

export default HomeBody;
