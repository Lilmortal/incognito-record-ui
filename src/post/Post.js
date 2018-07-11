import React from 'react';

import createBem from '../util/createBem';

import './Post.scss';
import DigitalClock from '../DigitalClock';

const bem = createBem('incognito-Post');

export default class Post extends React.Component {
  onPostHover = () => {
    if (this.props.onPostHover) {
      this.props.onPostHover({
        date: this.props.date,
        image: this.props.image,
      });
    }
  };

  render() {
    const { title, post, ariaLabelledby } = this.props;

    return (
      <div
        className={bem()}
        onMouseEnter={this.onPostHover}
        aria-labelledby={ariaLabelledby}
      >
        <h2 className={bem('title')}>{title}</h2>
        <div className={bem('body')}>
          <DigitalClock date={this.props.date} />
          <div className={bem('post')}>{post}</div>
        </div>
      </div>
    );
  }
}
