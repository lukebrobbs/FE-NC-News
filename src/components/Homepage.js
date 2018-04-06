import React, { Component } from "react";
import "../styles/Homepage.css";
import Header from "./Header";
import HomeBody from "./HomeBody";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./Article";
import Comments from "./Comments";
import Topic from "./Topic";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeBody} />
          <Route
            exact
            path={"/articles/:articleId/comments"}
            component={Comments}
          />
          <Route exact path={"/articles/:articleId"} component={Article} />
          <Route path={"/topics/:topicid"} component={Topic} />
        </div>
      </Router>
    );
  }
}

/* <Header>
<HomePage>
<Articles>
<Article>
<Topics>
<Topic>
<User> */

export default HomePage;
