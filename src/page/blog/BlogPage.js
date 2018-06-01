import React from "react";

import Header from "../../header";
import Categories from "../../categories";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

const BlogPage = () => (
  <div className={bem()}>
    <Header />
    <Categories />
  </div>
);

export default BlogPage;
