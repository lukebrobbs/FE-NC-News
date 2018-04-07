import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import api from "../utils/api";
import sample from "lodash.sample";

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
  getRandomTopic = () => {
    const topics = [...this.state.topics];
    const location = window.location.pathname.split("/");
    const currentTopic = location[location.length - 1];
    return sample(
      this.state.topics.filter(topic => topic.slug !== currentTopic)
    );
  };

  populateNavBar = () => {
    const { topics } = this.state;
    console.log(window.location.pathname);
    return (
      <div className="Navitems">
        <Link to={`/topics/${this.getRandomTopic().slug}`}>
          <span>Random</span>
        </Link>
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
