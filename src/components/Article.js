import React, { Component } from "react";
import "../styles/Article.css";
import api from "../utils/api";

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
    return api.getArticleById(match.params.articleId).then(article => {
      this.setState({
        article
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="article">
        <p>{this.state.article.length ? this.state.article[0].title : null}</p>
      </div>
    );
  }
}

export default Article;
