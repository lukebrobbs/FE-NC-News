import React from "react";
import "../styles/Comments.css";
import CommentSnippet from "./CommentSnippet";
import PropTypes from "prop-types";

const Comments = ({ comments, updateComments, article, changeVote }) => {
  return (
    <div className="comment-container">
      {comments.map((comment, i) => {
        return (
          <CommentSnippet
            key={i}
            comment={comment}
            article={article}
            updateComments={updateComments}
            index={i}
            changeVote={changeVote}
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
