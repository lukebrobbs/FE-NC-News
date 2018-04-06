import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CommentSnippet.css";
import api from "../utils/api";
import Voter from "./Voter";

class CommentSnippet extends Component {
  render() {
    const { comment } = this.props;
    console.log(comment);
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
        </div>
      </div>
    );
  }
}

export default CommentSnippet;
