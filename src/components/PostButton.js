import React, { Component } from "react";
import "../styles/PostButton.css";
import api from "../utils/api";

class PostButton extends Component {
  postComment = () => {
    api.postComment;
  };

  render() {
    return (
      <button className="post-button" onClick={this.postComment}>
        Post
      </button>
    );
  }
}

export default PostButton;
