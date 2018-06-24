import React from "react";
import { Transition } from "react-spring";

import createBem from "../../util/createBem";
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
      <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }}>
        {this.state.currentTime &&
          (styles => (
            <div className={bem()} style={styles} aria-hidden>
              {this.state.currentTime.toLocaleString()}
            </div>
          ))}
      </Transition>
    );
  }
}

export default Timer;
