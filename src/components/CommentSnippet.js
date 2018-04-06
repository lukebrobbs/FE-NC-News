import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CommentSnippet.css";
import Voter from "./Voter";
import moment from "moment";

class CommentSnippet extends Component {
  render() {
    const { comment } = this.props;
    const date = moment(comment.created_at, "x").fromNow();
    return (
      <div className="comment-snippet">
        <Voter id={comment._id} votes={comment.votes} type="comment" />
        <div className="Comment content">
          <p>
            submitted by
            <Link to={`/users/${comment.created_by._id}`}>{` ${
              comment.created_by.username
            } `}</Link>{" "}
            {`${date}`}
          </p>
          <p>{comment.body}</p>
        </div>
      </div>
    );
  }
}

export default CommentSnippet;
