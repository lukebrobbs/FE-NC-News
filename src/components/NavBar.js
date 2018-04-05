import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import api from "./utils/API";

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
      <div className="Navitems">
        {topics.map((topic, i) => {
          return (
            <Link key={i} to={`/topics/${topic.slug}`}>
              <span>{topic.title}</span>
            </Link>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="top-nav">
        {this.state.topics.length ? this.populateNavBar() : null}
      </div>
    );
  }
}

export default NavBar;
