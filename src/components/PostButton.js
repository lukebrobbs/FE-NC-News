import React from "react";
import "../styles/PostButton.css";
import PropTypes from "prop-types";

const PostButton = ({ postComment }) => {
  return (
    <button className="post-button" onClick={postComment}>
      Post
    </button>
  );
};

PostButton.propTypes = {
  postComment: PropTypes.func
};
export default PostButton;
