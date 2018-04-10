import React, { Component } from "react";
import "../styles/CreateComment.css";
import PostButton from "./PostButton";
import api from "../utils/api";
import PropTypes from "prop-types";

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
    const { articleId, refreshComments } = this.props;
    const commentToPost = { comment: this.state.newComment };
    api.postComment(articleId, commentToPost).then(response => {
      this.setState({ newComment: "" });
      refreshComments();
    });
  };

  render() {
    const { newComment } = this.state;
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {isAuthenticated() && (
          <div className="create-comment">
            <textarea
              className="comment-input"
              placeholder="Comment...."
              onChange={this.handleChange}
              value={newComment}
            />

            <PostButton postComment={this.postComment} />
          </div>
        )}
      </div>
    );
  }
}

CreateComment.propTypes = {
  auth: PropTypes.object.isRequired,
  refreshComments: PropTypes.func,
  articleId: PropTypes.string
};

export default CreateComment;
