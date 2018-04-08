import React from "react";
import { Route, Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import Callback from "./components/Callback/Callback";
import Auth from "./components/Auth/Auth";
import history from "./components/history";
import Article from "./components/Article";
import Topic from "./components/Topic";
import User from "./components/User";
import NavBar from "./components/NavBar";
import "./styles/App.css";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={NavBar}>
      <div className="app">
        <Route
          exact
          path="/"
          render={props => <HomePage auth={auth} {...props} />}
        />
        <Route
          path="/home"
          render={props => <HomePage auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          exact
          path={"/articles/:articleId"}
          render={props => <Article auth={auth} {...props} />}
        />
        <Route
          exact
          path={"/topics/:topicid"}
          render={props => <Topic auth={auth} {...props} />}
        />
        <Route
          exact
          path={"/users/:userid"}
          render={props => <User auth={auth} {...props} />}
        />
      </div>
    </Router>
  );
};
