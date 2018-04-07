import React, { Component } from "react";
import Articles from "./Articles";

class Topic extends Component {
  render() {
    const { match } = this.props;
    console.log("Topic render");
    console.log(`Topicparams ${match.params.topicid}`);
    return (
      <div className="home-body">
        <h1 className="header">{`/${match.params.topicid}`}</h1>
        <h2 className="sub-header"> Hot articles</h2>
        <Articles topics={`${match.params.topicid}`} />
      </div>
    );
  }
}

export default Topic;
