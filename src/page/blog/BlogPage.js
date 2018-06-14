import React from "react";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../../header";
import Footer from "../../footer";
import Categories from "../../categories";
import Calendar from "../../blog/calendar";
import Post from "../../blog/post";

import createBem from "../../util/createBem";
import "./BlogPage.scss";

const bem = createBem("incognito-blogPage");

// TODO: Fix CSS Grid
export default class BlogPage extends React.Component {
  state = {
    posts: [{ date: moment("11/02/2017", "DD/MM/YYYY"), post: "Post 0" }],
    date: moment()
  };

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
                {this.state.posts.map((post, index) => <Post post={post} key={index} onPostHover={this.onPostHover} />)}
              </InfiniteScroll>
            </div>
          </div>
          <Categories
            categories={[
              { key: 0, text: "Docker" },
              { key: 1, text: "Node JS" },
              { key: 2, text: "Golang" },
              { key: 3, text: "Kubernetes" },
              { key: 4, text: "Terraform" },
              { key: 5, text: "AWS Lambda" },
              { key: 6, text: "AWS Cloudfront" },
              { key: 7, text: "Elastic Search" }
            ]}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
