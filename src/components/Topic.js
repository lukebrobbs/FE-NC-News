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
        <NewArticleButton />
        <Articles />
      </div>
    );
  }
}

export default Topic;
