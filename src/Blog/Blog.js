import React from 'react';
import { FormattedMessage } from 'react-intl';
import InfiniteScroll from 'react-infinite-scroll-component';
import shortId from 'shortid';

import Spinner from '../Spinner';
import Post from '../Post';
import PageImage from '../PageImage';
import { createBem } from '../util/bem';

import messages from './Blog.messages';
import './Blog.scss';

const bem = createBem('incognito-Blog');

const Blog = ({ posts, image, isLoaded, onFetchMoreData }) => (
  <div className={bem()}>
    <PageImage image={image} title={image} />
    <div className={bem('gradient')}>{image}</div>
    <div className={bem('posts')}>
      {!isLoaded ? (
        <Spinner>
          <FormattedMessage {...messages.initialLoad} />
        </Spinner>
      ) : (
        <div className={bem('scroller')}>
          <InfiniteScroll
            dataLength={posts.length}
            next={onFetchMoreData}
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
            {posts.map(post => (
              <Post
                title={post.title}
                post={post.post}
                date={post.date}
                key={shortId.generate()}
                className={bem('post')}
              />
            ))}
          </InfiniteScroll>
        </div>
      )}
    </div>
  </div>
);

export default Blog;
