import axios from "axios";
const route = "https://infinite-garden-99260.herokuapp.com/api";
const api = {
  getTopics: () => {
    return axios.get(`${route}/topics`).then(topics => topics.data.topics);
  },
  getArticlesByTopic: topic => {
    return axios
      .get(`${route}/topics/${topic}/articles`)
      .then(articles => articles.data.articles);
  },
  getArticles: () => {
    return axios
      .get(`${route}/articles`)
      .then(articles => articles.data.articles);
  },
  getArticleById: id => {
    return axios
      .get(`${route}/articles/${id}`)
      .then(article => article.data.article);
  },
  getCommentsforArticle: articleId => {
    return axios
      .get(`${route}/articles/${articleId}/comments`)
      .then(comments => comments.data.comments);
  },
  getUsers: () => {
    return axios.get(`${route}/users`).then(users => users.data);
  },
  getUser: userName => {
    return axios.get(`${route}/users/${userName}`).then(user => user.data);
  },
  postComment: (articleId, comment) => {
    return axios({
      method: "post",
      url: `${route}/articles/${articleId}/comments`,
      data: comment
    });
  },
  incrementVote: articleId => {
    return axios.put(`${route}/articles/${articleId}?vote=up`);
  },
  decrementVote: articleId => {
    return axios.put(`${route}/articles/${articleId}?vote=down`);
  },
  incrementCommentVote: commentId => {
    return axios.put(`${route}/comments/${commentId}?vote=up`);
  },
  decrementCommentVote: commentId => {
    return axios.put(`${route}/comments/${commentId}?vote=down`);
  },
  deleteComment: commentId => {
    return axios.delete(`${route}/comments/${commentId}`);
  }
};
export default api;
