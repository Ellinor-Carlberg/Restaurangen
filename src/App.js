import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import HomePage from "./components/home/home-page.js";
import MenuPage from "./components/menu/menu-page.js";
import AboutPage from "./components/about/about-page.js";
import NewsPage from "./components/news/news-page.js";
import OnePost from "./components/news/one-post/one-post.js";
import HamburgerMenu from "./components/headers/hamburger-menu/hamburger-menu.js";
import Header from "./components/headers/header/header.js";
/* import ScrollToTop from "./ScrollToTop.js";
<ScrollToTop />
 */

function App() {
  
  return (
    <div class="app-wrapper">
      <div class="content-wrapper">
        <BrowserRouter>
        
          <HamburgerMenu />
          <Header />
          <div>
          
            <Route component={HomePage} path="/" exact />
            <Route component={MenuPage} path="/menu" />
            <Route component={AboutPage} path="/about" />
            <Route component={NewsPage} path="/news" />
            <Route component={OnePost} path="/:slug" /> 
            <Redirect path='*' to='/' exact/>
          </div>
          
        </BrowserRouter>
      </div>
      <Footer class="footer" />
    </div>
  );
}

export default App;
