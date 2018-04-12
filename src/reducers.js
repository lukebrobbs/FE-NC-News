import { combineReducers } from "redux";
// import * as actions from "./actions"
import {
  POPULATE_ARTICLES,
  POPULATE_COMMENTS,
  POPULATE_TOPICS,
  POPULATE_USER,
  FILTER_ARTICLES,
  GET_ARTICLE,
  HIDE_ARTICLE,
  POST_COMMENT,
  VOTE_COMMENT,
  VOTE_ARTICLE
} from "./actions";
import produce from "immer";

function articles(state = [], action) {
  return produce(state, draftState => {
    switch (action.type) {
      case POPULATE_ARTICLES:
        draftState = action.articles;
        return draftState;
      case HIDE_ARTICLE:
        return draftState.filter(article => article._id !== action.id);
      case FILTER_ARTICLES:
        return draftState.filter(
          article =>
            article.topic.title.toLowerCase() !== action.topic.toLowerCase()
        );
      case VOTE_ARTICLE:
        return draftState.map(article => {
          if (article._id !== action.id) {
            article.votes += action.by;
          }
          return article;
        });
      case GET_ARTICLE:
        return draftState.filter(article => article._id === action.id);
      default:
        return state;
    }
  });
}

function comments(state = [], action) {
  return produce(state, draftState => {
    switch (action.type) {
      case POPULATE_COMMENTS:
        draftState = action.comments;
        return draftState;
      case VOTE_COMMENT:
        return draftState.map(comment => {
          if (comment._id !== action.id) {
            comment.votes += action.by;
          }
          return comment;
        });
      default:
        return state;
    }
  });
}

function user(state = {}, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case POPULATE_USER:
        draftState = action.user;
        return draftState;
      default:
        return state;
    }
  });
}

function topics(state = [], action) {
  return produce(state, draftState => {
    switch (action.type) {
      case POPULATE_TOPICS:
        draftState = action.topics;
        return draftState;
      default:
        return state;
    }
  });
}

const reducers = combineReducers({ articles, topics, user, comments });

export default reducers;
