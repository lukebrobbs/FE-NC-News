import React, { Component } from "react";
import "../styles/Articles.css";
import api from "../utils/api";
import articlesUtil from "../utils/articles";
import ArticleSnippet from "./ArticleSnippet";

class Articles extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    this._mounted = true;
    this.getArticles();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  getArticles = () => {
    api.getArticles().then(articles => {
      const filteredArticles = articlesUtil.filterByTopic(
        articles,
        this.props.topics
      );
      const sortedArticles = articlesUtil.sortByVotes(filteredArticles);
      if (this._mounted) {
        this.setState({
          articles: sortedArticles
        });
      }
    });
  };

  hideArticle = index => {
    const newState = [...this.state.articles];
    newState.splice(index, 1);
    this.setState({
      articles: newState
    });
  };
  renderArticles = () => {
    const { articles } = this.state;
    return (
      <div className="articles">
        {articles.map((article, i) => {
          return (
            <ArticleSnippet
              key={i}
              hideArticle={this.hideArticle}
              article={article}
              index={i}
            />
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="articles-wrapper">
        {this.state.articles.length && this.renderArticles()}
      </div>
    );
  }
}

export default Articles;
