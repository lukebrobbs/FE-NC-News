import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import api from "../utils/api";
import sample from "lodash.sample";
import { Button } from "react-bootstrap";

class NavBar extends Component {
  state = {
    topics: [],
    user: {}
  };

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    this.setTopics();
    if (isAuthenticated()) {
      this.setUser();
    }
  }

  login = () => {
    this.props.auth.login();
  };

  logout = () => {
    this.props.auth.logout();
  };

  setTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  setUser = () => {
    const { getProfile } = this.props.auth;
    getProfile((err, user) => this.setState({ user }));
  };
  getRandomTopic = () => {
    const location = window.location.pathname.split("/");
    const currentTopic = location[location.length - 1];
    return sample(
      this.state.topics.filter(topic => topic.slug !== currentTopic)
    );
  };

  populateNavBar = () => {
    const { topics, user } = this.state;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="Navitems">
        <header className="App-header">
          <Link to={"/"}>
            <img
              className="Logo"
              src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png"
              alt="Northcoders Logo"
            />
          </Link>
        </header>
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
        {!isAuthenticated() && (
          <Button className="login-button" onClick={this.login.bind(this)}>
            Log In
          </Button>
        )}
        {isAuthenticated() && (
          <div>
            <Button className="logout-button" onClick={this.logout.bind(this)}>
              Log Out
            </Button>
            {user && <img className="user-avatar" src={user.picture} />}
          </div>
        )}
      </div>
    );
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="top-nav">
        {topics.length ? this.populateNavBar() : null}
      </div>
    );
  }
}

export default NavBar;
