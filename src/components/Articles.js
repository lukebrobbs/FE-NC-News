import React, { Component } from "react";
import "../styles/Articles.css";
import api from "../utils/api";
import articlesUtil from "../utils/articles";
import ArticleSnippet from "./ArticleSnippet";
import Search from "./Search";

class Articles extends Component {
  state = {
    articles: [],
    articlesToSearch: []
  };
  componentDidMount() {
    this._mounted = true;
    this.getArticles();
  }

  componentDidUpdate() {
    this.getArticles();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  getArticles = () => {
    api.getArticles().then(articles => {
      const sortedArticles = articlesUtil.sortByVotes(articles);
      const filteredArticles = articlesUtil.filterByTopic(
        sortedArticles,
        this.props.topics
      );

      if (this._mounted) {
        this.setState({
          articles: filteredArticles,
          articlesToSearch: sortedArticles
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
    const { articles, articlesToSearch } = this.state;
    return (
      <div>
        <div className="search">
          <Search searchItems={articlesToSearch} />
        </div>
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
      </div>
    );
  };
  render() {
    return (
      <div className="articles-wrapper">
        {this.state.articles.length ? this.renderArticles() : null}
      </div>
    );
  }
}

export default Articles;
