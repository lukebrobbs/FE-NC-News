import React, { Component } from "react";
import ArticleSnippet from "./ArticleSnippet";
import api from "../utils/api";
import CommentSnippet from "./CommentSnippet";
import commentsUtil from "../utils/comments";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
import Header from "./Header";
import "../styles/Article.css";

class Article extends Component {
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
        const sortedComments = commentsUtil.sortByVotes(comments);
        this.setState({
          article,
          comments: sortedComments
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
        <Header title="/Comments" />
        {article.length ? (
          <ArticleSnippet type="full" article={this.state.article[0]} />
        ) : null}
        <CreateComment articleId={article.length && article[0]._id} />
        {comments.length ? <Comments comments={this.state.comments} /> : null}
      </div>
    );
  }
}

export default Article;
