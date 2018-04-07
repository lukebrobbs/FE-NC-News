import React, { Component } from "react";
import "../styles/App.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./Article";
import Topic from "./Topic";
import Header from "./Header";
import User from "./User";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path={"/articles/:articleId"} component={Article} />
          <Route exact path={"/topics/:topicid"} component={Topic} />
          <Route exact path={"/users/:userid"} component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
