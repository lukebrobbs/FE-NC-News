import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CommentSnippet.css";
import Voter from "./Voter";
import moment from "moment";

class CommentSnippet extends Component {
  render() {
    const { comment, updateComments, changeVote } = this.props;

    const date = moment(comment.created_at, "x").fromNow();
    return (
      <div className="comment-snippet">
        <Voter
          id={comment._id}
          votes={comment.votes}
          article={comment}
          updateComments={updateComments}
          type="comment"
          changeVote={changeVote}
        />
        <div className="Comment content">
          <p className="submitted-by">
            submitted by
            <Link to={`/users/${comment.created_by._id}`}>{` ${
              comment.created_by.username
            } `}</Link>{" "}
            {`${date}`}
          </p>
          <p>{comment.body}</p>
          <p className="comment-options">{`${date}`}</p>
        </div>
      </div>
    );
  }
}

export default CommentSnippet;
