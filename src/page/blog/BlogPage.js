import React from 'react';
import { Transition, animated } from 'react-spring';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';

import Calendar from '../../calendar';
import Post from '../../blog/post';

import createBem from '../../util/createBem';
import './BlogPage.scss';

const bem = createBem('incognito-Blog');

// TODO: Fix CSS Grid
export default class BlogPage extends React.Component {
  state = {
    posts: [{ date: moment('11/02/2017', 'DD/MM/YYYY'), post: 'Post 0' }],
    date: moment(),
    loaded: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 1500);
  }

  onPostHover = date => {
    this.setState({ date });
  };

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        posts: this.state.posts.concat([
          { date: moment('31/12/2018', 'DD/MM/YYYY'), post: 'Post 1' },
          { date: moment('14/08/2020', 'DD/MM/YYYY'), post: 'Post 2' },
          { date: moment('12/09/2021', 'DD/MM/YYYY'), post: 'Post 3' },
        ]),
      });
    }, 1000);
  };

  render() {
    return (
      <div className={bem()}>
        <div className={bem('placeholder')} />
        <div className={bem('calendarWrapper')}>
          <div className={bem('calendar')}>
            <div className={bem('calendarSticky')}>
              <Calendar date={this.state.date} />
            </div>
          </div>
          <Transition
            native
            from={{ opacity: 0 }}
            enter={{
              opacity: this.state.loaded ? 1 : 0,
            }}
          >
            {({ opacity }) => (
              <animated.div
                className={bem('posts', this.state.loaded ? '' : 'loading')}
                style={{ opacity }}
              >
                <InfiniteScroll
                  dataLength={this.state.posts.length}
                  next={this.fetchMoreData}
                  hasMore
                  loader={<h3>Loading...</h3>}
                  style={{ height: 'inherit', overflow: 'inherit' }}
                >
                  {this.state.posts.map((post, index) => (
                    <Post
                      post={post.post}
                      date={post.date}
                      key={index}
                      onPostHover={this.onPostHover}
                    />
                  ))}
                </InfiniteScroll>
              </animated.div>
            )}
          </Transition>
        </div>
      </div>
    );
  }
}
