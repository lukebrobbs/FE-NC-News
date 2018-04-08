import React, { Component } from "react";
import "../styles/User.css";
import api from "../utils/api";

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
    console.log(this.state);
    return <p>User</p>;
  }
}

export default User;
