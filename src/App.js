import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import HomePage from "./components/home/home-page.js";
import MenuPage from "./components/menu/menu-page.js";
import AboutPage from "./components/about/about-page.js";
import NewsPage from "./components/news/news-page.js";
import OnePost from "./components/news/one-post.js";
import HamburgerMenu from "./components/hamburger-menu/hamburger-menu.js";

function App() {
  return (
    <div class="app-wrapper">
      <div class="content-wrapper">
        <BrowserRouter>
          <HamburgerMenu />
          <div>
            <Route component={HomePage} path="/" exact />
            <Route component={MenuPage} path="/menu" />
            <Route component={AboutPage} path="/about" />
            <Route component={NewsPage} path="/news" />
            <Route component={OnePost} path="/:slug" />
          </div>
        </BrowserRouter>
      </div>
      <Footer class="footer" />
    </div>
  );
}

export default App;

/*


     <Route component={AllPosts} path="/" exact />
          <Route component={OnePost} path="/:slug" />

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
