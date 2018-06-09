import React from "react";

import Header from "../../header";
import Categories from "../../categories";
import DateTime from "../../blog/datetime";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

class BlogPage extends React.Component {
  state = {
    date: 23
  };

  render() {
    return (
      <div className={bem()}>
        <Header />
        <div className={bem("body")}>
          <DateTime date={this.state.date} loaded />
          <button
            onClick={() => {
              if (this.state.date >= 31) {
                this.setState({ date: 1 });
              } else {
                this.setState({ date: (this.state.date += 2) });
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
