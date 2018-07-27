import React from 'react';
import moment from 'moment';

import About from '../../About';

export default class AboutPage extends React.Component {
  state = {
    intersectedContents: [],
    deadlineContentsDate: moment('24/07/2018', 'DD/MM/YYYY'),
    deadlineContentsButtonSelectedId: 0
  };

  componentWillMount() {
    this.onIntersectionObserve(entries => {
      entries.forEach(entry => {
        const { isIntersecting, intersectionRatio } = entry;

        // intersectionRatio is needed because Edge does not support isIntersecting
        if (isIntersecting || intersectionRatio > 0) {
          this.setState({
            intersectedContents: { ...this.state.intersectedContents, [entry.target.id]: true }
          });
        }
      });
    });
  }

  componentWillUnmount() {
    this.observer.disconnect();
    this.observer = null;
  }

  onIntersectionObserve = cb => {
    this.observer = new window.IntersectionObserver(cb);
  };

  onPushContentRefs = ref =>
    this.observer !== undefined && this.observer !== null && ref !== undefined && this.observer.observe(ref);

  onUpdateDate = date => {
    this.setState({ deadlineContentsDate: date });
  };

  onUpdateDeadlineContentsButtonSelected = id => this.setState({ deadlineContentsButtonSelectedId: id });

  onDeadlineContentsButtonClick = (id, date) => {
    this.onUpdateDate(date);
    this.onUpdateDeadlineContentsButtonSelected(id);
  };

  render() {
    const { id } = this.props;
    const { intersectedContents, deadlineContentsDate, deadlineContentsButtonSelectedId } = this.state;

    return (
      <About
        id={id}
        intersectedContents={intersectedContents}
        deadlineContentsDate={deadlineContentsDate}
        deadlineContentsButtonSelectedId={deadlineContentsButtonSelectedId}
        onPushContentRefs={this.onPushContentRefs}
        onDeadlineContentsButtonClick={this.onDeadlineContentsButtonClick}
      />
    );
  }
}
