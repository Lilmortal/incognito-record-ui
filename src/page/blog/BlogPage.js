import React from "react";

import Header from "../../header";
import Categories from "../../categories";
import Calendar from "../../blog/calendar";
import Post from "../../blog/post";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

const BlogPage = () => (
  <div className={bem()}>
    <Header />
    <div className={bem("wrapper")}>
      <div className={bem("placeholder")} />
      <div className={bem("calendarWrapper")}>
        <div className={bem("calendar")}>
          <div className={bem("calendarSticky")}>
            <Calendar />
          </div>
        </div>
        <div className={bem("posts")}>
          <Post post="This is an introduction post 1" />
          <Post post="This is an introduction post 2" />
          <Post post="This is an introduction post 3" />
          <Post post="This is an introduction post 4" />
          <Post post="This is an introduction post 5" />
          <Post post="This is an introduction post 6" />
          <Post post="This is an introduction post 7" />
        </div>
      </div>
      <div className={bem("categories")}>
        <Categories
          categories={[{ key: 0, text: "category 1" }, { key: 1, text: "category 2" }, { key: 2, text: "category 3" }]}
        />
      </div>
    </div>
  </div>
);

export default BlogPage;
