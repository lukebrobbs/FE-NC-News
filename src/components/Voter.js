import React, { Component } from "react";
import "../styles/Voter.css";
import api from "../utils/api";
import PropTypes from "prop-types";

class Voter extends Component {
  state = {
    votes: 0,
    voted: false
  };
  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return { votes: prevState.votes };
  // }

  componentDidUpdate(prevProps) {
    if (this.props.votes !== prevProps.votes) {
      this.setState({ votes: this.props.votes });
    }
  }

  decreaseVotes = () => {
    const { id, type, updateArticles, index } = this.props;
    const { votes } = this.state;
    updateArticles(index, votes - 1);
    this.setState({ votes: votes - 1 });
    type === "article" ? api.decrementVote(id) : api.decrementCommentVote(id);
  };

  increaseVotes = () => {
    const { id, type, index, updateArticles } = this.props;
    const { votes } = this.state;

    this.setState({ votes: votes + 1 });
    updateArticles(index, votes + 1);
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
