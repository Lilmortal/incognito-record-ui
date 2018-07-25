import React from 'react';
import moment from 'moment';

import { createBem } from '../util/bem';
import './CountdownTimer.scss';

const bem = createBem('incognito-CountdownTimer');

class CountdownTimer extends React.Component {
  state = {
    currentTime: undefined
  };

  componentDidMount() {
    const { deadlineDateTime } = this.props;

    this.onUpdateTimer(deadlineDateTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onUpdateTimer(deadlineDateTime = moment()) {
    this.intervalId = setInterval(() => {
      const diff = moment.duration(moment(deadlineDateTime).diff(moment()));
      const days = parseInt(diff.asDays(), 10);
      const hours = parseInt(diff.asHours(), 10) - days * 24;
      const minutes = parseInt(diff.asMinutes(), 10) - (days * 24 * 60 + hours * 60);
      const seconds = parseInt(diff.asSeconds(), 10) - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);

      this.setState({ currentTime: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds` });
    }, 1000);
  }

  intervalId = 0;

  render() {
    return (
      <div className={bem()} aria-hidden>
        {this.state.currentTime}
      </div>
    );
  }
}

export default CountdownTimer;
