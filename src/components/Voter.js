import React, { Component } from "react";
import "../styles/Voter.css";
import api from "../utils/api";
import PropTypes from "prop-types";

class Voter extends Component {
  state = {
    votes: this.props.votes
  };

  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }

  refreshAndUpdate = () => {
    this.props.refreshComments();
    this.setState({ votes: this.props.votes });
  };
  decreaseVotes = () => {
    this.props.type === "article"
      ? api.decrementVote(this.props.id).then(res => {
          this.refreshAndUpdate();
        })
      : api.decrementCommentVote(this.props.id).then(res => {
          this.refreshAndUpdate();
        });
  };

  increaseVotes = () => {
    this.props.type === "article"
      ? api.incrementVote(this.props.id).then(res => {
          this.refreshAndUpdate();
        })
      : api.incrementCommentVote(this.props.id).then(res => {
          this.refreshAndUpdate();
        });
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
  type: PropTypes.string,
  refreshComments: PropTypes.func
};

export default Voter;
