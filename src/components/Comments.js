import React from "react";
import "../styles/Comments.css";
import CommentSnippet from "./CommentSnippet";

const Comments = ({ comments }) => {
  return (
    <div className="comment-container">
      {comments.map((comment, i) => {
        return <CommentSnippet key={i} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
