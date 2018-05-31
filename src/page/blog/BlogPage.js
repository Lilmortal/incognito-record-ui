import React from "react";

import Header from "../../header";
import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

const BlogPage = () => (
  <div className={bem()}>
    <Header />
  </div>
);

export default BlogPage;
