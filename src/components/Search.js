import React, { Component } from "react";
import ArticleSnippet from "./ArticleSnippet";

class Search extends Component {
  state = {
    results: []
  };

  renderArticles = () => {
    this.state.results.map(result => {
      return <ArticleSnippet article={result} />;
    });
  };
  render() {
    const { results } = this.state;
    return (
      <div className="search-area">
        <textarea placeHolder="Search articles..." />
        {results.length ? <this.renderArticles /> : null}
      </div>
    );
  }
}

export default Search;
