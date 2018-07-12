import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Transition, animated } from 'react-spring';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';

import Spinner from '../../Spinner';
import Post from '../../Post';
import PageImage from '../../PageImage';
import createBem from '../../util/createBem';

import messages from './Blog.messages';
import './Blog.scss';

const bem = createBem('incognito-Blog');

// TODO: Fix CSS Grid
export default class Blog extends React.Component {
  state = {
    posts: [
      {
        date: moment('11/02/2017', 'DD/MM/YYYY'),
        title: 'Title 0',
        post: 'Post 0',
      },
      {
        date: moment('31/12/2017', 'DD/MM/YYYY'),
        title: 'Title 1',
        post: 'Post 1',
      },
      {
        date: moment('14/08/2020', 'DD/MM/YYYY'),
        title: 'Title 2',
        post: 'Post 2',
      },
      {
        date: moment('12/09/2021', 'DD/MM/YYYY'),
        title: 'Title 3',
        post: 'Post 3',
      },
    ],
    image: 'Aws',
    loaded: false,
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
            date: moment('31/12/2017', 'DD/MM/YYYY'),
            title: 'Title 1',
            post: 'Post 1',
          },
          {
            date: moment('14/08/2020', 'DD/MM/YYYY'),
            title: 'Title 2',
            post: 'Post 2',
          },
          {
            date: moment('12/09/2021', 'DD/MM/YYYY'),
            title: 'Title 3',
            post: 'Post 3',
          },
        ]),
      });
    }, 1000);
  };

  id = 0;

  render() {
    return (
      <div className={bem()}>
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{
            opacity: this.state.loaded ? 1 : 0,
          }}
        >
          {({ opacity }) => (
            <React.Fragment>
              <PageImage image={this.state.image} title={this.state.image} />
              <div className={bem('gradient')}>{this.state.image}</div>
              <div className={bem('posts')}>
                {!this.state.loaded ? (
                  <Spinner>
                    <FormattedMessage {...messages.initialLoad} />
                  </Spinner>
                ) : (
                  <animated.div style={{ opacity }}>
                    <InfiniteScroll
                      dataLength={this.state.posts.length}
                      next={this.fetchMoreData}
                      hasMore
                      loader={
                        <div className={bem('spinner')}>
                          <Spinner>
                            <FormattedMessage {...messages.additionalLoad} />
                          </Spinner>
                        </div>
                      }
                      style={{ height: 'inherit', overflow: 'inherit' }}
                    >
                      {this.state.posts.map(post => (
                        <Post
                          title={post.title}
                          post={post.post}
                          date={post.date}
                          // eslint-disable-next-line no-plusplus
                          key={this.id++}
                          className={bem('post')}
                        />
                      ))}
                    </InfiniteScroll>
                  </animated.div>
                )}
              </div>
            </React.Fragment>
          )}
        </Transition>
      </div>
    );
  }
}