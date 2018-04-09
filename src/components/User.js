import React, { Component } from "react";
import "../styles/User.css";
import api from "../utils/api";
import Articles from "./Articles";
import moment from "moment";

class User extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const { match } = this.props;
    const { userid } = match.params;
    api.getUser(userid).then(user => this.setState({ user }));
  }
  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { userid } = match.params;
    if (prevProps.match.params.userid !== userid) {
      api.getUser(userid).then(user => this.setState({ user }));
    }
  }

  render() {
    console.log("render user");
    const { user } = this.state;
    const { match } = this.props;
    return (
      <div>
        <div className="user">
          <div className="profile">
            <img
              className="profile-picture"
              src={`${user.avatar_url}`}
              alt="User avatar"
            />
            <h1 className="username">{`/${user.username}` || null}</h1>
            <p className="joined-on">
              {`Joined ${moment(user.joined_on).format("MMMM Do YYYY")}` ||
                null}
            </p>
          </div>
          <Articles type="user" filterBy={match.params.userid} />
        </div>
      </div>
    );
  }
}

export default User;
