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
        <h1 className="header">Hot articles</h1>
        <NewArticleButton />
        <Articles />
      </div>
    );
  }
}

export default HomeBody;
