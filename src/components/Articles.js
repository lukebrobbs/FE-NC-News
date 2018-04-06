import React, { Component } from "react";
import "../styles/Articles.css";
import api from "../utils/api";
import articlesUtil from "../utils/articles";
import ArticleSnippet from "./ArticleSnippet";

//Need to render articles based on the page the user is currently on
//eg.on homepage, Articles need to be rendered in vote order
//on articles by topic, articles also need to be filtered

class Articles extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    return this.getArticles();
  }
  getArticles = () => {
    api.getArticles().then(articles => {
      const sortedArticles = articlesUtil.sortByVotes(articles);
      this.setState({
        articles: sortedArticles
      });
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
        {this.state.articles.length ? this.renderArticles() : null}
      </div>
    );
  }
}

export default Articles;
