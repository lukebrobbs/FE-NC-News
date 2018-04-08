import React, { Component } from "react";
import "../styles/App.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./Article";
import Topic from "./Topic";
import NavBar from "./NavBar";
import User from "./User";
import Callback from "./Callback/Callback";
import Auth from "./Auth/Auth";
import history from "./history";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path={"/articles/:articleId"} component={Article} />
          <Route exact path={"/topics/:topicid"} component={Topic} />
          <Route exact path={"/users/:userid"} component={User} />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
