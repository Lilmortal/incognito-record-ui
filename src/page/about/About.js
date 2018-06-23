import React from "react";
import { Transition, animated } from "react-spring";

import Content from "../../content";
import createBem from "../../util/createBem";
import "./About.scss";

const bem = createBem("incognito-About");

export default class About extends React.Component {
  componentDidMount() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting, intersectionRatio } = entry;

        // intersectionRatio is needed because Edge does not support isIntersecting
        if (isIntersecting || intersectionRatio > 0) {
          // TODO: { ...entry, target: { className: {}}} does not work...
          // eslint-disable-next-line no-param-reassign
          entry.target.className += ` ${entry.target.className}--isIntersecting`;
        }
      });
    });
  }

  componentWillUnmount() {
    this.observer.disconnect();
    this.observer = null;
  }

  pushContentRefs = ref => this.observer !== null && this.observer.observe(ref);

  render() {
    const contents = [];
    for (let i = 0; i < 200; i += 1) {
      contents.push(
        <Content key={i} title="Title" onRefObserve={this.pushContentRefs}>
          About
        </Content>
      );
    }

    return (
      <Transition native from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {({ opacity }) => (
          <animated.div className={bem()} style={{ opacity }}>
            {contents}
          </animated.div>
        )}
      </Transition>
    );
  }
}
