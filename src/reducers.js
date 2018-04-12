import { combineReducers } from "redux";
import {
  FILTER_ARTICLES,
  GET_ARTICLE,
  HIDE_ARTICLE,
  POST_COMMENT,
  VOTE_COMMENT,
  VOTE_ARTICLE
} from "./actions";
import api from "./utils/api";
import utils from "./utils/utils";
import produce from "immer";

function articles(state = [], action) {
  switch (action.type) {
    case HIDE_ARTICLE:
      const stateUpdate = produce(state, draftState =>
        draftState.filter(article => article._id !== action.id)
      );
    case FILTER_ARTICLES:
      const stateUpdate = produce(state, draftState =>
        draftState.filter(
          article =>
            article.topic.title.toLowerCase() !== action.topic.toLowerCase()
        )
      );
    case VOTE_ARTICLE:
      const stateUpdate = produce(state, draftState =>
        draftState.map(article => {
          if (article._id !== action.id) {
            article.votes += action.by;
          }
        })
      );
    case GET_ARTICLE:
      const stateUpdate = produce(state, draftState =>
        draftState.filter(article => article._id === action.id)
      );

    default:
      return state;
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case VOTE_COMMENT:
      const stateUpdate = produce(state, draftState =>
        draftState.map(comment => {
          if (comment._id !== action.id) {
            comment.votes += action.by;
          }
        })
      );
  }
}
