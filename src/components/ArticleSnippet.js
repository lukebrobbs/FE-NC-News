import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ArticleSnippet.css";

const ArticleSnippet = ({ article }) => {
  return (
    <div className="article-snippet">
      <Link to={`/articles/${article._id}`}>
        <h2>{article.title}</h2>
      </Link>
      <p>
        submitted by{" "}
        <Link to={`/users/${article.created_by._id}`}>{`${
          article.created_by.username
        }`}</Link>
      </p>
    </div>
  );
};

export default ArticleSnippet;
