import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CommentSnippet.css";
import Voter from "./Voter";

class CommentSnippet extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment-snippet">
        <Voter id={comment._id} votes={comment.votes} type="comment" />
        <div className="Comment content">
          <p>
            submitted by
            <Link to={`/users/${comment.created_by._id}`}>{` ${
              comment.created_by.username
            } `}</Link>
          </p>
          <p>{comment.body}</p>
        </div>
      </div>
    );
  }
}

export default CommentSnippet;
