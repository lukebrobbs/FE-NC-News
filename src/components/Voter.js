import React, { Component } from "react";
import "../styles/Voter.css";
import api from "../utils/api";
import PropTypes from "prop-types";

class Voter extends Component {
  state = {
    votes: this.props.votes
  };

  decreaseVotes = () => {
    this.setState({ votes: this.state.votes - 1 });
    this.props.type === "article"
      ? api.decrementVote(this.props.id)
      : api.decrementCommentVote(this.props.id);
  };

  increaseVotes = () => {
    this.setState({ votes: this.state.votes + 1 });
    this.props.type === "article"
      ? api.incrementVote(this.props.id)
      : api.incrementCommentVote(this.props.id);
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

Voter.propTypes = {
  id: PropTypes.string.isRequired,
  votes: PropTypes.number,
  type: PropTypes.string
};

export default Voter;
