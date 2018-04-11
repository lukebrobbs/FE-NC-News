import React, { Component } from "react";
import "../styles/Voter.css";
import PropTypes from "prop-types";

class Voter extends Component {
  state = {
    voted: false
  };
  updateVotes = by => {
    const {
      updateArticles,
      updateComments,
      article,
      type,
      type2,
      changeVote
    } = this.props;
    const { votes, _id } = article;
    if (this.state.voted) return;
    else {
      if (type === "articles") updateArticles(_id, votes + by, by);
      if (type === "comment") updateComments(_id, votes + by, by);
      if (type2 === "article") changeVote(by);
      this.setState({ voted: !this.state.voted });
    }
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

Voter.propTypes = {
  article: PropTypes.object.isRequired,
  updateComments: PropTypes.func,
  updateArticles: PropTypes.func,
  changeVote: PropTypes.func,
  type: PropTypes.string.isRequired,
  type2: PropTypes.string
};

export default Voter;
