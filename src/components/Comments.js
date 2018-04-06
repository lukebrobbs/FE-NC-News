import React, { Component } from "react";
import ArticleSnippet from "./ArticleSnippet";
import api from "../utils/api";
import CommentSnippet from "./CommentSnippet";

class Comments extends Component {
  state = {
    article: [],
    comments: []
  };
  componentDidMount() {
    this.getArticleAndComments();
  }

  getArticleAndComments = () => {
    const { match } = this.props;
    api
      .getArticleById(match.params.articleId)
      .then(article => {
        return Promise.all([
          article,
          api.getCommentsforArticle(article[0]._id)
        ]);
      })
      .then(([article, comments]) => {
        this.setState({
          article,
          comments
        });
      });
  };

  renderComments = () => {
    return (
      <div className="comment-container">
        {this.state.comments.map((comment, i) => {
          return <CommentSnippet key={i} comment={comment} />;
        })}
      </div>
    );
  };

  render() {
    const { comments, article } = this.state;
    return (
      <div className="comments">
        {article.length ? (
          <ArticleSnippet article={this.state.article[0]} />
        ) : null}
        {comments.length ? <this.renderComments /> : null}
      </div>
    );
  }
}

export default Comments;
