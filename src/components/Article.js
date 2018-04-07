import React, { Component } from "react";
import ArticleSnippet from "./ArticleSnippet";
import api from "../utils/api";
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

  render() {
    const { comments, article } = this.state;
    return (
      <div className="comments">
        <Header />
        {article.length && (
          <ArticleSnippet
            type="full"
            refreshComments={this.getArticleAndComments}
            article={this.state.article[0]}
          />
        )}
        <CreateComment
          refreshComments={this.getArticleAndComments}
          articleId={article.length && article[0]._id}
        />
        {comments.length && (
          <Comments
            comments={this.state.comments}
            refreshComments={this.getArticleAndComments}
          />
        )}
      </div>
    );
  }
}

export default Article;
