import React from "react";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

import Calendar from "../../blog/calendar";
import Post from "../../blog/post";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-Blog");

// TODO: Fix CSS Grid
export default class BlogPage extends React.Component {
  state = {
    posts: [{ id: 0, date: moment("11/02/2017", "DD/MM/YYYY"), post: "Post 0" }],
    date: moment()
  };

  onPostHover = date => {
    this.setState({ date });
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        posts: this.state.posts.concat([
          { id: 1, date: moment("31/12/2018", "DD/MM/YYYY"), post: "Post 1" },
          { id: 2, date: moment("14/08/2020", "DD/MM/YYYY"), post: "Post 2" },
          { id: 3, date: moment("12/09/2021", "DD/MM/YYYY"), post: "Post 3" }
        ])
      });
    }, 1000);
  };

  render() {
    return (
      <div className={bem()}>
        <div className={bem("placeholder")} />
        <div className={bem("calendarWrapper")}>
          <div className={bem("calendar")}>
            <div className={bem("calendarSticky")}>
              <Calendar date={this.state.date} />
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
              {this.state.posts.map(post => <Post post={post} key={post.id} onPostHover={this.onPostHover} />)}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
}
