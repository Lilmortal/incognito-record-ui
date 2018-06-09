import React from "react";
import { Transition, animated } from "react-spring";

import createBem from "../../util/createBem";
import "./DateTime.scss";

const bem = createBem("wifi-DateTime");

const BLOCK = 5;

const dates = [];
for (let i = 1; i <= 31; i += 1) {
  dates.push(
    <span className={bem("date")} key={i}>
      {i}
    </span>
  );
}

export default class DateTime extends React.PureComponent {
  state = {
    loaded: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  }

  componentDidUpdate() {
    this.prevDate = this.props.date;
  }

  get prevDateLocation() {
    return BLOCK * (this.prevDate || 0) - BLOCK;
  }

  get currentDateLocation() {
    return BLOCK * (this.props.date || 0) - BLOCK;
  }

  prevDate: undefined;

  render() {
    const { date } = this.props;

    return (
      <Transition
        native
        from={{ borderLength: this.state.loaded ? 200 : 0, y: this.prevDateLocation }}
        enter={{ borderLength: 200, y: this.currentDateLocation }}
        keys={date}
      >
        {({ borderLength, y }) => (
          <animated.div
            className={bem()}
            style={{
              borderTop: borderLength.interpolate(length => `${length}px solid black`),
              borderBottom: borderLength.interpolate(length => `${length}px solid black`)
            }}
          >
            <animated.div
              className={bem("dates")}
              style={{
                transform: y.interpolate(pos => `translateY(${pos}em)`)
              }}
            >
              {dates}
            </animated.div>
          </animated.div>
        )}
      </Transition>
    );
  }
}
