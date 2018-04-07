import React, { Component } from "react";
import "../styles/Voter.css";
import api from "../utils/api";
import PropTypes from "prop-types";

class Voter extends Component {
  state = {
    votes: this.props.votes
  };

  componentDidUpdate(prevProps) {
    if (this.props.votes !== prevProps.votes) {
      this.setState({ votes: this.props.votes });
    }
  }

  decreaseVotes = () => {
    const { id, type } = this.props;
    this.setState({ votes: this.state.votes - 1 });
    type === "article" ? api.decrementVote(id) : api.decrementCommentVote(id);
  };

  increaseVotes = () => {
    const { id, type } = this.props;
    this.setState({ votes: this.state.votes + 1 });
    type === "article" ? api.incrementVote(id) : api.incrementCommentVote(id);
  };
  render() {
    const { votes } = this.state;
    return (
      <div className="voter">
        <img
          onClick={this.increaseVotes}
          className="arrow"
          src={require("../images/arrow-up.png")}
          alt="up vote"
        />
        <p>{votes}</p>
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
