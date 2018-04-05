import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "./utils/API";

import "./ArticleSnippet.css";

class ArticleSnippet extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    return this.getComments();
  }

  getComments = () => {
    api.getCommentsforArticle(this.props.article._id).then(comments => {
      this.setState({ comments });
    });
  };

  renderArticleSnippet = () => {
    const { article } = this.props;
    return (
      <div className="article-snippet">
        <Link to={`/articles/${article._id}`}>
          <h2>{article.title}</h2>
        </Link>
        <p>
          submitted by
          <Link to={`/users/${article.created_by._id}`}>{` ${
            article.created_by.username
          } `}</Link>
        </p>
        <div className="article-options">
          <p className="comment-count">{`${
            this.state.comments.length
          } comments`}</p>
          <p
            className="hide"
            onClick={() => this.props.hideArticle(this.props.index)}
          >
            hide
          </p>
        </div>
      </div>
    );
  };

  render() {
    return <this.renderArticleSnippet />;
  }
}

export default ArticleSnippet;
