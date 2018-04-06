import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Article.css";
import api from "../utils/api";
import Voter from "./Voter";

//Will render an individual article, depending on the match.params.id

class Article extends Component {
  render() {
    return (
      <div className="article">
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Article;
