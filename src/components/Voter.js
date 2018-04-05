import React, { Component } from "react";
import "./Voter.css";
import api from "./utils/API";

class Voter extends Component {
  state = {
    votes: this.props.votes
  };

  decreaseVotes = () => {
    api.decrementVote(this.props.id).then(votes => {
      this.setState({
        votes: votes.data.article.votes
      });
    });
  };

  increaseVotes = () => {
    api.incrementVote(this.props.id).then(votes => {
      this.setState({ votes: votes.data.article.votes });
    });
  };
  render() {
    return (
      <div className="voter">
        <img
          onClick={this.increaseVotes}
          className="arrow"
          src={require("./utils/arrow-up.png")}
        />
        <p>{this.state.votes}</p>
        <img
          onClick={this.decreaseVotes}
          className="arrow"
          src={require("./utils/arrow-down.png")}
        />
      </div>
    );
  }
}

export default Voter;
