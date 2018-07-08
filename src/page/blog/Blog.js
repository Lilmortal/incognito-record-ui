import React from "react";
import { FormattedMessage } from "react-intl";
import { Transition, animated } from "react-spring";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "../../spinner";
import Post from "../../blog/post";
import PostImage from "../../blog/postImage";
import createBem from "../../util/createBem";
import withBreakpoints from "../../util/withBreakpoints";

import messages from "./Blog.messages";
import "./Blog.scss";

const bem = createBem("incognito-Blog");

// TODO: Fix CSS Grid
export class Blog extends React.Component {
  state = {
    posts: [
      {
        date: moment("11/02/2017", "DD/MM/YYYY"),
        title: "Title 0",
        post: "Post 0",
        image: "docker"
      },
      {
        date: moment("31/12/2017", "DD/MM/YYYY"),
        title: "Title 1",
        post: "Post 1",
        image: "flower"
      },
      {
        date: moment("14/08/2020", "DD/MM/YYYY"),
        title: "Title 2",
        post: "Post 2",
        image: "docker"
      },
      {
        date: moment("12/09/2021", "DD/MM/YYYY"),
        title: "Title 3",
        post: "Post 3",
        image: "flower"
      }
    ],
    image: "",
    loaded: false
  };

  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData = () => {
    setTimeout(() => this.setState({ loaded: true }), 1000);
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        posts: this.state.posts.concat([
          {
            date: moment("31/12/2017", "DD/MM/YYYY"),
            title: "Title 1",
            post: "Post 1",
            image: "flower"
          },
          {
            date: moment("14/08/2020", "DD/MM/YYYY"),
            title: "Title 2",
            post: "Post 2",
            image: "docker"
          },
          {
            date: moment("12/09/2021", "DD/MM/YYYY"),
            title: "Title 3",
            post: "Post 3",
            image: "flower"
          }
        ])
      });
    }, 1000);
  };

  id = 0;

  render() {
    const { breakpoints } = this.props;

    return (
      <div className={bem()}>
        <div className={bem("postsWrapper")}>
          {!this.state.loaded && (
            <Spinner>
              <FormattedMessage {...messages.initialLoad} />
            </Spinner>
          )}
          <Transition
            native
            from={{ opacity: 0 }}
            enter={{
              opacity: this.state.loaded ? 1 : 0
            }}
          >
            {({ opacity }) => (
              <animated.div className={bem("posts", this.state.loaded ? "" : "loading")} style={{ opacity }}>
                <InfiniteScroll
                  dataLength={this.state.posts.length}
                  next={this.fetchMoreData}
                  hasMore
                  loader={
                    <div className={bem("spinner")}>
                      <Spinner>
                        <FormattedMessage {...messages.additionalLoad} />
                      </Spinner>
                    </div>
                  }
                  style={{ height: "inherit", overflow: "inherit" }}
                >
                  {this.state.posts.map(post => (
                    <Post
                      title={post.title}
                      post={post.post}
                      date={post.date}
                      image={post.image}
                      // eslint-disable-next-line no-plusplus
                      key={this.id++}
                      className={bem("post")}
                      showCalendar={breakpoints === "lg"}
                      showDigitalClock={breakpoints === "sm"}
                    />
                  ))}
                </InfiniteScroll>
              </animated.div>
            )}
          </Transition>
        </div>
        {breakpoints === "lg" && (
          <div className={bem("postImage")}>
            <PostImage type={this.state.image} />
          </div>
        )}
      </div>
    );
  }
}

export default withBreakpoints(Blog);
