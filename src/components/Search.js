import React, { Component } from "react";
import ArticleSnippet from "./ArticleSnippet";
import articlesUtil from "../utils/articles";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  renderArticles = () => {
    return this.state.results.map(result => {
      return <ArticleSnippet article={result} />;
    });
  };

  handleChange = event => {
    const results = articlesUtil.searchArticles(
      this.props.searchItems,
      event.target.value
    );
    console.log(results);
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
        {results.length ? <this.renderArticles /> : null}
      </div>
    );
  }
}

export default Search;
