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
    date: moment("30/12/2018", "DD/MM/YYYY")
  };

  render() {
    return (
      <div className={bem()}>
        <Header />
        <div className={bem("body")}>
          <Calendar fullDate={this.state.date} />
          <button
            onClick={() => {
              this.state.date.add(1, "days");
              this.setState({ date: moment(this.state.date) });
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
