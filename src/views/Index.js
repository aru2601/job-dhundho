import React from "react";

import MainNavbar from "components/Navbars/MainNavbar.js";

import Hero from "./Home/Hero.js";
import Carousel from "./Carousel/Carousel.js";
import Login from "./Home/Login.js";

import './style.css'
import MainFooter from "components/Footers/MainFooter.js";
import Jobs from "./JobDetails/JobCards.js";
import Uploader from "./Home/Uploader.js";
import Test from "./Home/Test.js";
import Categories from "./Category/Categories.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <Hero />
          <Categories />
          <Jobs />
          <Test />
          <Carousel />
          <Uploader />
          <Login />

        </main>
        <MainFooter />
      </>
    );
  }
}

export default Index;
