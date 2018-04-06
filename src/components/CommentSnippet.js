import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import api from "../utils/api";
import Voter from "./Voter";

class CommentSnippet extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment-snippet">
        <Voter id={comment._id} votes={comment.votes} type="comment" />
      </div>
    );
  }
}

export default CommentSnippet;
