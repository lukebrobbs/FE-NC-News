import React, { Component } from "react";
import Articles from "./Articles";

class Topic extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <div className="home-body">
          <h1 className="header">{`/${match.params.topicid}`}</h1>
          <h2 className="sub-header"> Hot articles</h2>
          <Articles type="topic" filterBy={`${match.params.topicid}`} />
        </div>
      </div>
    );
  }
}

export default Topic;
