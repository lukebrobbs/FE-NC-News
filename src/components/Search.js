import React, { Component } from "react";
import ArticleSnippet from "./ArticleSnippet";
import articlesUtil from "../utils/articles";
import "../styles/Search.css";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  renderArticles = () => {
    return this.state.results.map((result, i) => {
      return <ArticleSnippet key={i} article={result} />;
    });
  };

  handleChange = event => {
    const results = articlesUtil.searchArticles(
      this.props.searchItems,
      event.target.value
    );
    this.setState({
      search: event.target.value,
      results
    });
  };

  render() {
    const { results, search } = this.state;
    return (
      <div className="search-area">
        <textarea
          placeholder="Search articles..."
          value={search}
          onChange={this.handleChange}
        />
        {results.length ? (
          <this.renderArticles />
        ) : (
          <div className="search-params">
            <p>Search Articles</p>
            <p>Search Users</p>
            <p>Search Topics</p>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
