import React, { Component } from "react";
import "../styles/PostButton.css";

class PostButton extends Component {
  render() {
    return (
      <button className="post-button" onClick={this.props.postComment}>
        Post
      </button>
    );
  }
}

export default PostButton;
