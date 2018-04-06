import React, { Component } from "react";
import "../styles/Voter.css";
import api from "../utils/api";

class Voter extends Component {
  state = {
    votes: this.props.votes
  };

  decreaseVotes = () => {
    this.setState({ votes: this.state.votes - 1 });
    api.decrementVote(this.props.id);
  };

  increaseVotes = () => {
    this.setState({ votes: this.state.votes + 1 });
    api.incrementVote(this.props.id);
  };
  render() {
    return (
      <div className="voter">
        <img
          onClick={this.increaseVotes}
          className="arrow"
          src={require("../images/arrow-up.png")}
          alt="up vote"
        />
        <p>{this.state.votes}</p>
        <img
          onClick={this.decreaseVotes}
          className="arrow"
          src={require("../images/arrow-down.png")}
          alt="down vote"
        />
      </div>
    );
  }
}

export default Voter;
