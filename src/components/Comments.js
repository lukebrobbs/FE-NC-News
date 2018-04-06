import React from "react";
import "../styles/Comments.css";
import CommentSnippet from "./CommentSnippet";
import PropTypes from "prop-types";

const Comments = ({ comments, refreshComments }) => {
  return (
    <div className="comment-container">
      {comments.map((comment, i) => {
        return (
          <CommentSnippet
            refreshComments={refreshComments}
            key={i}
            comment={comment}
          />
        );
      })}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
