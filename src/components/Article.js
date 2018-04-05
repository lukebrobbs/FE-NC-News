import React, { Component } from "react";
import "./Article.css";
import Header from "./Header";
import api from "./utils/API";

//Will render an individual article, depending on the match.params.id

class Article extends Component {
  renderArticles = () => {
    return (
      <div>
        {this.state.articles.map((article, i) => {
          return <p key={i}>hello</p>;
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="article">
        <p>Article</p>
      </div>
    );
  }
}

export default Article;
