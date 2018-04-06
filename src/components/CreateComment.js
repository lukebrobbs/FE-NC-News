import React, { Component } from "react";
import "../styles/CreateComment.css";
import PostButton from "./PostButton";

class CreateComment extends Component {
  state = {
    newComment: ""
  };

  handleChange = () => {};

  render() {
    return (
      <div className="create-comment">
        <textarea
          className="comment-input"
          placeholder="Comment...."
          onChange={this.handleChange}
        />
        <PostButton />
      </div>
    );
  }
}

export default CreateComment;
