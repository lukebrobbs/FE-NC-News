import React, { Component } from "react";
import ArticleSnippet from "./ArticleSnippet";
import api from "../utils/api";
import commentsUtil from "../utils/comments";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
import "../styles/Article.css";
import produce from "immer";
import utils from "../utils/utils";

class Article extends Component {
  state = {
    article: [],
    comments: []
  };
  componentDidMount() {
    this.getArticleAndComments();
  }
  updateComments = (commentId, voteCount, by) => {
    const stateUpdate = produce(this.state, draftState => {
      draftState.comments = utils.sort(
        draftState.comments.map(comment => {
          if (comment._id === commentId) {
            comment.votes = voteCount;
          }
          return comment;
        }),
        "votes"
      );
    });
    this.setState(stateUpdate);
    by === 1
      ? api.incrementCommentVote(commentId)
      : api.decrementCommentVote(commentId);
  };
  changeArticleVote = by => {
    const { match } = this.props;
    api
      .getArticleById(match.params.articleId)
      .then(article => {
        return by === 1
          ? api.incrementVote(match.params.articleId)
          : api.decrementVote(match.params.articleId);
      })
      .then(article => {
        this.setState({ article: [article.data.article] });
      });
  };

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
    console.log(this.state);
    return (
      <div>
        <div className="comments">
          {article.length ? (
            <ArticleSnippet
              article={this.state.article[0]}
              type={"full"}
              type2={"article"}
              changeVote={this.changeArticleVote}
            />
          ) : null}
          <CreateComment
            auth={this.props.auth}
            refreshComments={this.getArticleAndComments}
            articleId={article.length ? article[0]._id : null}
          />
          {comments.length ? (
            <Comments
              updateComments={this.updateComments}
              comments={comments}
              article={article}
              refreshComments={this.getArticleAndComments}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Article;
