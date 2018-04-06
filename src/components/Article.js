import React, { Component } from "react";
import "../styles/Article.css";
import api from "../utils/API";

//Will render an individual article, depending on the match.params.id

class Article extends Component {
  state = {
    article: []
  };
  componentDidMount() {
    return this.getArticle();
  }

  getArticle = () => {
    const { match } = this.props;
    api.getArticleById(match.params.articleId).then(article => {
      console.log(article);
      this.setState({
        article
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="article">
        <p>Article</p>
      </div>
    );
  }
}

export default Article;
