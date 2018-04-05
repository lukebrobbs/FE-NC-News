import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import HomeBody from "./HomeBody";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

/* <Header>
<HomePage>
<Articles>
<Article>
<Topics>
<Topic>
<User> */

export default HomePage;
