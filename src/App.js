import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/allPosts.js";
import OnePost from "./components/onePost.js";

function App() {
  return (
    <BrowserRouter>
     <div>
      <Route component={AllPosts} path="/" exact />
      <Route component={OnePost} path="/:slug" />
  
      </div>
    </BrowserRouter>
  );
}

export default App;


/*


    <Route component={HomePage} path="/home" />
      <Route component={MenuPage} path="/menu" />
      <Route component={AboutPage} path="/about" />
      <Route component={NewsPage} path="/news" />

<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
