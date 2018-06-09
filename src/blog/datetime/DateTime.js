import React from "react";
import { Transition, animated } from "react-spring";

import createBem from "../../util/createBem";
import "./DateTime.scss";

const bem = createBem("wifi-DateTime");

const BLOCK = 5;

export default class DateTime extends React.PureComponent {
  state = {
    loaded: false,
    prevDate: undefined
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ prevDate: prevProps.date });
    }
  }

  get prevDateLocation() {
    return BLOCK * (this.state.prevDate || 0);
  }

  get currentDateLocation() {
    return BLOCK * (this.props.date - (this.state.prevDate || 0));
  }

  render() {
    const dates = [];
    const { date } = this.props;

    for (let i = 1; i <= 31; i += 1) {
      dates.push(
        <span className={bem("date")} key={i}>
          {i}
        </span>
      );
    }

    return (
      <Transition native from={{ borderLength: this.state.loaded ? 200 : 0 }} enter={{ borderLength: 200 }} keys={date}>
        {({ borderLength }) => (
          <animated.div
            className={bem()}
            style={{
              borderTop: borderLength.interpolate(length => `${length}px solid black`),
              borderBottom: borderLength.interpolate(length => `${length}px solid black`)
            }}
          >
            <Transition
              native
              from={{ y: this.prevDateLocation }}
              enter={{ y: this.prevDateLocation + this.currentDateLocation - BLOCK }}
              keys={date}
            >
              {({ y }) => (
                <animated.div
                  className={bem("dates")}
                  style={{
                    transform: y.interpolate(pos => `translateY(${pos}em)`)
                  }}
                >
                  {dates}
                </animated.div>
              )}
            </Transition>
          </animated.div>
        )}
      </Transition>
    );
  }
}
