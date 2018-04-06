import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Voter from "./Voter";
import "../styles/ArticleSnippet.css";

class ArticleSnippet extends Component {
  //adding a comment count in back end may save creating a state here
  state = {
    comments: []
  };
  componentDidMount() {
    this._mounted = true;

    api.getCommentsforArticle(this.props.article._id).then(comments => {
      if (this._mounted) {
        this.setState({ comments });
      }
    });
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  renderArticleSnippet = () => {
    const { article } = this.props;
    return (
      <div className="article-snippet">
        <Voter id={article._id} votes={article.votes} type="article" />
        <div className="article-info">
          <h3>
            <Link to={`/articles/${article._id}`}>{article.title}</Link>
          </h3>
          <p>
            submitted by
            <Link to={`/users/${article.created_by._id}`}>{` ${
              article.created_by.username
            } `}</Link>
          </p>
          <div className="article-options">
            <Link to={`/articles/${article._id}/comments`}>
              <p className="comment-count">{`${
                this.state.comments.length
              } comments`}</p>
            </Link>
            {this.props.hideArticle ? (
              <p
                className="hide"
                onClick={() => this.props.hideArticle(this.props.index)}
              >
                hide
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <this.renderArticleSnippet />
      </div>
    );
  }
}

export default ArticleSnippet;
