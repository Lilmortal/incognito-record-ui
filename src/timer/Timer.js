import React from "react";

import createBem from "~utils/createBem";
import "./Timer.scss";

const bem = createBem("incognito-timer");

class Timer extends React.Component {
  state = {
    currentTime: new Date()
  };

  componentDidMount() {
    const { initialDateTime } = this.props;

    this.updateTimer(initialDateTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  intervalId = 0;

  updateTimer(initialDateTime = Date.now()) {
    const diff = new Date(Math.abs(Date.now() - initialDateTime));

    this.intervalId = setInterval(() => {
      this.setState({ currentTime: new Date(Date.now() - diff) });
    }, 1000);
  }

  render() {
    return <div className={bem()}>{this.state.currentTime.toUTCString().slice(0, -4)}</div>;
  }
}

export default Timer;
