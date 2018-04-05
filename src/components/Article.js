import React, { Component } from "react";
import "./Article.css";
import Header from "./Header";
import api from "./utils/API";

class Article extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    return this.getArticles();
  }
  getArticles = () => {
    const { match } = this.props;
    api.getArticlesByTopic(match.params.topicid).then(articles => {
      this.setState({
        articles
      });
    });
  };

  renderArticles = () => {
    return (
      <div>
        {this.state.articles.map((article, i) => {
          return <p key={i}>hello</p>;
        })}}
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="article">
        {this.state.articles.length ? this.renderArticles() : null}
      </div>
    );
  }
}

export default Article;
