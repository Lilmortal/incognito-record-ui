import React from "react";
import { CSSTransition } from "react-transition-group";

import createBem from "~utils/createBem";
import "./Timer.scss";

const bem = createBem("incognito-timer");

class Timer extends React.Component {
  state = {
    currentTime: undefined
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
    return (
      <CSSTransition in={!!this.state.currentTime} classNames={bem()}>
        <div className={bem("timer")}>{this.state.currentTime && this.state.currentTime.toLocaleString()}</div>
      </CSSTransition>
    );
  }
}

export default Timer;
