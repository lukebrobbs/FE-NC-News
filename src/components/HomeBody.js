import React, { Component } from "react";
import "../styles/HomeBody.css";
import Articles from "./Articles";
import NewArticleButton from "./NewArticleButton";
import Header from "./Header";

class HomeBody extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="home-body">
        <Header title="/Home" />
        <h1 className="header">Hot articles</h1>
        <NewArticleButton />
        <Articles />
      </div>
    );
  }
}

export default HomeBody;
