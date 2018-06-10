import React from "react";
import moment from "moment";

import Header from "../../header";
import Categories from "../../categories";
import Calendar from "../../blog/calendar";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

class BlogPage extends React.Component {
  state = {
    date: new Date(2010, 8, 13)
  };

  render() {
    return (
      <div className={bem()}>
        <Header />
        <div className={bem("body")}>
          <Calendar fullDate={this.state.date} loaded />
          <button
            onClick={() => {
              if (this.state.date.date >= 31) {
                this.setState({ date: this.state.date.date(1) });
              } else {
                this.setState({ date: new Date(2010, 12, 1) });
              }
            }}
            className={bem("button")}
          >
            Increment date
          </button>
        </div>
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

export default BlogPage;
