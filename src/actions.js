export const POPULATE_ARTICLES = "POPULATE_ARTICLES";
export const POPULATE_COMMENTS = "POPULATE_COMMENTS";
export const POPULATE_TOPICS = "POPULATE_TOPICS";
export const POPULATE_USER = "POPULATE_USER";
export const HIDE_ARTICLE = "HIDE_ARTICLE";
export const POST_COMMENT = "POST_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const VOTE_ARTICLE = "VOTE_ARTICLE";
export const FILTER_ARTICLES = "FILTER_ARTICLES";
export const GET_ARTICLE = "GET_ARTICLE";

export function populateArticles(articles) {
  return { type: POPULATE_ARTICLES, articles };
}
export function populateComments(comments) {
  return { type: POPULATE_COMMENTS, comments };
}
export function populateTopics(topics) {
  return { type: POPULATE_TOPICS, topics };
}
export function populateUser(user) {
  return { type: POPULATE_USER, user };
}
export function getArticle(id) {
  return { type: GET_ARTICLE, id };
}
export function filterArticles(topic) {
  return { type: FILTER_ARTICLES, topic };
}

export function hideArticle(id) {
  return { type: HIDE_ARTICLE, id };
}

export function PostComment(articleId, text) {
  return { type: POST_COMMENT, articleId, text };
}

export function voteComment(by, id) {
  return { type: VOTE_COMMENT, by };
}

export function VoteArticle(by, id) {
  return { type: VOTE_ARTICLE, by, id };
}
