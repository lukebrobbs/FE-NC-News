import React, { Component } from "react";
import "../styles/User.css";
import api from "../utils/api";
import Articles from "./Articles";

class User extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const { match } = this.props;
    const { userid } = match.params;
    api.getUser(userid).then(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state;
    const { match } = this.props;
    return (
      <div className="user">
        <div className="profile">
          <img
            className="profile-picture"
            src={`${user.avatar_url}`}
            alt="User avatar"
          />
          <h1 className="username">{`/${user.username}` || null}</h1>
          <h2 className="sub-header">Articles</h2>
        </div>
        <Articles type="user" filterBy={match.params.userid} />
      </div>
    );
  }
}

export default User;
