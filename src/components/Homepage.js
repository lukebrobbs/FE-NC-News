import React, { Component } from "react";
import "../styles/Homepage.css";
import Header from "./Header";
import HomeBody from "./HomeBody";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./Article";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={HomeBody} />
          <Route path={"/articles/:articleId"} component={Article} />
          <Route path={"/topics/:topicid"} component={Article} />
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
