import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Articles.css";
import api from "./utils/API";
import articlesUtil from "./utils/articles";
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
  renderArticles = () => {
    const { articles } = this.state;
    return (
      <div className="Articles">
        {articles.map((article, i) => {
          return <ArticleSnippet key={i} article={article} />;
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="articles">
        {this.state.articles.length ? this.renderArticles() : null}
      </div>
    );
  }
}

export default Articles;
