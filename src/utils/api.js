import axios from "axios";

const api = {
  getTopics: () => {
    return axios
      .get("https://infinite-garden-99260.herokuapp.com/api/topics")
      .then(topics => topics.data.topics);
  },
  getArticlesByTopic: topic => {
    return axios
      .get(
        `https://infinite-garden-99260.herokuapp.com/api/topics/${topic}/articles`
      )
      .then(articles => articles.data.articles);
  },
  getArticles: () => {
    return axios
      .get("https://infinite-garden-99260.herokuapp.com/api/articles")
      .then(articles => articles.data.articles);
  },
  getArticleById: id => {
    return axios
      .get(`https://infinite-garden-99260.herokuapp.com/api/articles/${id}`)
      .then(article => article.data.article);
  },
  getCommentsforArticle: articleId => {
    return axios
      .get(
        `https://infinite-garden-99260.herokuapp.com/api/articles/${articleId}/comments`
      )
      .then(comments => comments.data.comments);
  },
  getUsers: () => {
    return axios
      .get("https://infinite-garden-99260.herokuapp.com/api/users")
      .then(users => users.data);
  },
  getUser: userName => {
    return axios
      .get(`https://infinite-garden-99260.herokuapp.com/api/users/${userName}`)
      .then(user => user.data);
  },
  postComment: (articleId, comment) => {
    return axios({
      method: "post",
      url: `https://infinite-garden-99260.herokuapp.com/api/articles/${articleId}/comments`,
      data: { comment }
    });
  },
  incrementVote: articleId => {
    return axios.put(
      `https://infinite-garden-99260.herokuapp.com/api/articles/${articleId}?vote=up`
    );
  },
  decrementVote: articleId => {
    return axios.put(
      `https://infinite-garden-99260.herokuapp.com/api/articles/${articleId}?vote=down`
    );
  },
  incrementCommentVote: commentId => {
    return axios.put(
      `https://infinite-garden-99260.herokuapp.com/api/comments/${commentId}?vote=up`
    );
  },
  decrementCommentVote: commentId => {
    return axios.put(
      `https://infinite-garden-99260.herokuapp.com/api/comments/${commentId}?vote=down`
    );
  },
  deleteComment: commentId => {
    return axios.delete(
      `https://infinite-garden-99260.herokuapp.com/api/comments/${commentId}`
    );
  }
};
export default api;
