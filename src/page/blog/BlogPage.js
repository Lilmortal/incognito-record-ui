import React from "react";
import { Keyframes, config, animated } from "react-spring";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

import Calendar from "../../calendar";
import Post from "../../blog/post";

import delay from "../../util/delay";
import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-Blog");

// TODO: Fix CSS Grid
export default class BlogPage extends React.Component {
  state = {
    posts: [{ date: moment("11/02/2017", "DD/MM/YYYY"), post: "Post 0" }],
    date: moment(),
    loaded: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  }

  onPostHover = date => {
    this.setState({ date });
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        posts: this.state.posts.concat([
          { date: moment("31/12/2018", "DD/MM/YYYY"), post: "Post 1" },
          { date: moment("14/08/2020", "DD/MM/YYYY"), post: "Post 2" },
          { date: moment("12/09/2021", "DD/MM/YYYY"), post: "Post 3" }
        ])
      });
    }, 0);
  };

  PostContainer = Keyframes.Transition({
    initial: {
      to: {
        opacity: 0.01
      },
      config: config.slow
    },
    show: async call => {
      await delay(1000);
      await call({
        to: {
          opacity: 1
        },
        config: config.slow
      });
    }
  });

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
          <this.PostContainer native state={this.state.loaded ? "show" : "initial"}>
            {({ opacity }) => (
              <animated.div className={bem("posts")} style={{ opacity }}>
                <InfiniteScroll
                  dataLength={this.state.posts.length}
                  next={this.fetchMoreData}
                  hasMore
                  loader={<h3>Loading...</h3>}
                  style={{ height: "inherit", overflow: "inherit" }}
                >
                  {this.state.posts.map((post, index) => (
                    <Post post={post} key={index} onPostHover={this.onPostHover} />
                  ))}
                </InfiniteScroll>
              </animated.div>
            )}
          </this.PostContainer>
        </div>
      </div>
    );
  }
}
