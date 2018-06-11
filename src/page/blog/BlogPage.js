import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../../header";
import Categories from "../../categories";
import Calendar from "../../blog/calendar";
import Post from "../../blog/post";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

// TODO: Fix CSS Grid
export default class BlogPage extends React.Component {
  state = {
    posts: [Array.from({ length: 5 })]
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({ posts: this.state.posts.concat(Array.from({ length: 5 })) });
    }, 1000);
  };

  render() {
    return (
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
              <InfiniteScroll
                dataLength={this.state.posts.length}
                next={this.fetchMoreData}
                hasMore
                loader={<h3>Loading...</h3>}
                style={{ height: "inherit", overflow: "inherit" }}
              >
                {this.state.posts.map((post, index) => <Post post={`post ${index}`} key={post} />)}
              </InfiniteScroll>
            </div>
          </div>
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
