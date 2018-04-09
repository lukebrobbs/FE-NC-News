import React, { Component } from "react";
import "../styles/Voter.css";
import api from "../utils/api";
import PropTypes from "prop-types";

class Voter extends Component {
  updateVotes = by => {
    const {
      updateArticles,
      updateComments,
      article,
      type,
      type2,
      comment,
      changeVote
    } = this.props;
    const { votes, _id } = article;
    if (type === "articles") updateArticles(_id, votes + by, by);
    if (type === "comment") updateComments(_id, votes + by, by);
    if (type2 === "article") changeVote(by);
  };
  render() {
    const { votes } = this.props.article;
    return (
      <div className="voter">
        <img
          onClick={this.updateVotes.bind(this, 1)}
          className="arrow"
          src={require("../images/arrow-up.png")}
          alt="up vote"
        />
        <p>{votes}</p>
        <img
          onClick={this.updateVotes.bind(this, -1)}
          className="arrow"
          src={require("../images/arrow-down.png")}
          alt="down vote"
        />
      </div>
    );
  }
}

// Voter.propTypes = {
//   id: PropTypes.string.isRequired,
//   votes: PropTypes.number,
//   type: PropTypes.string
// };

export default Voter;
