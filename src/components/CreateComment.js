import React, { Component } from "react";
import "../styles/CreateComment.css";
import PostButton from "./PostButton";
import api from "../utils/api";

class CreateComment extends Component {
  state = {
    newComment: ""
  };

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };

  postComment = () => {
    const { articleId } = this.props;
    const commentToPost = { comment: this.state.newComment };
    api.postComment(articleId, commentToPost).then(response => {
      this.setState({ newComment: "" });
      this.props.refreshComments();
    });
  };

  render() {
    return (
      <div className="create-comment">
        <textarea
          className="comment-input"
          placeholder="Comment...."
          onChange={this.handleChange}
          value={this.state.newComment}
        />
        <PostButton postComment={this.postComment} />
      </div>
    );
  }
}

export default CreateComment;
