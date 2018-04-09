import React, { Component } from "react";
import "../styles/Articles.css";
import api from "../utils/api";
import articlesUtil from "../utils/articles";
import utils from "../utils/utils";
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

  componentDidUpdate(prevProps) {
    if (prevProps.filterBy !== this.props.filterBy) this.getArticles();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  getArticles = () => {
    api.getArticles().then(articles => {
      const sortedArticles = utils.sort(articles, "votes");
      const filteredArticles = articlesUtil.filterBy(
        sortedArticles,
        this.props.type,
        this.props.filterBy
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
  //bug with first and second items getting mixed up
  changeArticleVoteAndSort = (index, voteCount) => {
    const copy = [...this.state.articles];
    copy[index].votes = voteCount;
    const sortedArticles = utils.sort(copy, "votes");
    this.setState({ articles: sortedArticles });
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
                updateArticles={this.changeArticleVoteAndSort}
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
