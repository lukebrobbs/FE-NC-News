import React, { Component } from "react";
import Header from "./Header";
import NewArticleButton from "./NewArticleButton";
import Articles from "./Articles";

class Topic extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="home-body">
        <Header />
        <h1 className="header">{`/${match.params.topicid}`}</h1>
        <h2 className="sub-header"> Hot articles</h2>
        <NewArticleButton />
        <Articles articles={`${match.params.topicid}`} />
      </div>
    );
  }
}

export default Topic;
