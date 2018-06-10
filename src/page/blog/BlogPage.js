import React from "react";

import Header from "../../header";
import Categories from "../../categories";
import Calendar from "../../blog/calendar";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

export default class BlogPage extends React.Component {
  render() {
    return (
      <div className={bem()}>
        <Header />
        <Calendar fullDate={this.state.date} />
        <div className={bem("categories")}>
          <Categories
            categories={[
              { key: 0, text: "category 1" },
              { key: 1, text: "category 2" },
              { key: 2, text: "category 3" }
            ]}
          />
        </div>
      </div>
    );
  }
}
