import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Voter from "./Voter";
import ArticleBody from "./ArticleBody";
import "../styles/ArticleSnippet.css";
import PropTypes from "prop-types";
import moment from "moment";

class ArticleSnippet extends Component {
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
  componentDidUpdate(newProps) {
    if (this.props.article._id !== newProps.article._id) {
      api.getCommentsforArticle(this.props.article._id).then(comments => {
        if (this._mounted) {
          this.setState({ comments });
        }
      });
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  renderArticleSnippet = () => {
    const {
      article,
      refreshComments,
      hideArticle,
      index,
      updateArticles
    } = this.props;
    console.log(article);
    const date = moment(article.created_at, "x").fromNow();
    return (
      <div className="article-snippet">
        <Voter
          id={article._id}
          votes={article.votes}
          index={index}
          updateArticles={updateArticles}
          refreshComments={refreshComments}
          type="article"
        />
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
          {this.props.type === "full" ? (
            <ArticleBody body={article.body} />
          ) : null}
          <div className="article-options">
            <Link to={`/articles/${article._id}`}>
              <p className="comment-count">{`${
                this.state.comments.length
              } comments`}</p>
            </Link>
            <p>{`${date}`}</p>
            {hideArticle ? (
              <p className="hide" onClick={() => hideArticle(index)}>
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

ArticleSnippet.propTypes = {
  article: PropTypes.object.isRequired,
  index: PropTypes.number,
  hideArticle: PropTypes.func,
  type: PropTypes.string
};
export default ArticleSnippet;
