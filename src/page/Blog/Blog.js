import React from 'react';
import moment from 'moment';

import Blog from '../../Blog';

export default class BlogPage extends React.Component {
  state = {
    posts: [
      {
        date: moment('11/02/2017', 'DD/MM/YYYY'),
        title: 'Title 0',
        post: 'Post 0'
      },
      {
        date: moment('31/12/2017', 'DD/MM/YYYY'),
        title: 'Title 1',
        post: 'Post 1'
      },
      {
        date: moment('14/08/2020', 'DD/MM/YYYY'),
        title: 'Title 2',
        post: 'Post 2'
      },
      {
        date: moment('12/09/2021', 'DD/MM/YYYY'),
        title: 'Title 3',
        post: 'Post 3'
      }
    ],
    image: 'Aws',
    isLoaded: false
  };

  componentDidMount() {
    this.onFetchInitialData();
  }

  componentWillUnmount() {
    clearTimeout(this.loadedTimer);
  }

  onFetchInitialData = () => {
    this.loadedTimer = setTimeout(() => this.setState({ isLoaded: true }), 1000);
  };

  onFetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        posts: this.state.posts.concat([
          {
            date: moment('31/12/2017', 'DD/MM/YYYY'),
            title: 'Title 1',
            post: 'Post 1'
          },
          {
            date: moment('14/08/2020', 'DD/MM/YYYY'),
            title: 'Title 2',
            post: 'Post 2'
          },
          {
            date: moment('12/09/2021', 'DD/MM/YYYY'),
            title: 'Title 3',
            post: 'Post 3'
          }
        ])
      });
    }, 1000);
  };

  id = 0;

  render() {
    const { isLoaded, image, posts } = this.state;

    return <Blog isLoaded={isLoaded} image={image} posts={posts} onFetchMoreData={this.onFetchMoreData} />;
  }
}
