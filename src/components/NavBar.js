import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navbar.css";
import api from "./utils/API";
import Article from "./Article";
import HomePage from "./Homepage";

class NavBar extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    return this.getTopics();
  }

  getTopics = () => {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };

  populateNavBar = () => {
    const { topics } = this.state;
    return (
      <Router>
        <div className="Navitems">
          {topics.map((topic, i) => {
            return (
              <Link key={i} to={`/topics/${topic.slug}`}>
                <span>{topic.title}</span>
              </Link>
            );
          })}
          <Route path={"/topics/:topicid"} component={Article} />
        </div>
      </Router>
    );
  };

  render() {
    return (
      <Router>
        <div className="top-nav">
          {this.state.topics.length ? this.populateNavBar() : null}
        </div>
      </Router>
    );
  }
}

export default NavBar;
