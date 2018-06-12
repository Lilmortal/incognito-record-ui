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

  componentDidMount() {
    const options = {
      root: this.interceptor,
      rootMargin: "0px",
      threshold: 1
    };

    this.observer = new window.IntersectionObserver(this.handleObserver, options);

    console.log(this.post0);
    for (let i = 0; i < 5; i += 1) {
      this.observer.observe(this[`post${i}`]);
    }
  }

  handleObserver = (entities, observer) => {
    console.log(entities, observer);
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({ posts: this.state.posts.concat(Array.from({ length: 5 })) });
      for (let i = this.state.posts.length - 5; i < this.state.posts; i += 1) {
        this.observer.observe(this[`post${i}`]);
      }
    }, 1000);
  };

  render() {
    return (
      <div className={bem()}>
        <Header />
        <div className={bem("interceptor")} ref={interceptor => (this.interceptor = interceptor)} />

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
                {this.state.posts.map((post, index) => (
                  <Post post={`post ${index}`} key={post} ref={postRef => (this[`post${index}`] = postRef)} />
                ))}
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
