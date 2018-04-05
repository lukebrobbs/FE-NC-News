import React, { Component } from "react";
import "./HomeBody.css";
import Articles from "./Articles";
import NewArticleButton from "./NewArticleButton";

class HomeBody extends Component {
  render() {
    return (
      <div className="home-body">
        <h1>Hot articles</h1>
        <NewArticleButton />
        <Articles />
      </div>
    );
  }
}

export default HomeBody;
