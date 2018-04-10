import React from "react";
import "../styles/ArticleBody.css";
import PropTypes from "prop-types";

const ArticleBody = ({ body }) => {
  return (
    <div className="article">
      <p>{body}</p>
    </div>
  );
};

ArticleBody.propTypes = {
  body: PropTypes.string
};

export default ArticleBody;
