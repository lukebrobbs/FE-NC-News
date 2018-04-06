import React, { Component } from "react";
import "../styles/ArticleBody.css";

//Will render an individual article, depending on the match.params.id

class ArticleBody extends Component {
  render() {
    return (
      <div className="article">
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default ArticleBody;
