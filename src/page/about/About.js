import React from "react";
import { Transition, animated } from "react-spring";

import createBem from "../../util/createBem";
import "./About.scss";

const bem = createBem("incognito-About");

export default class About extends React.Component {
  componentDidMount() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          entry.target.className = bem("contentTitle", "isIntersecting");
        }
      });
    });
  }

  pushContentRefs = ref => this.observer.observe(ref);

  Content = ({ title, children }) => (
    <div className={bem("contentWrapper")}>
      <div className={bem("contentTitleWrapper")}>
        <h2 className={bem("contentTitle")} ref={this.pushContentRefs}>
          {title}
        </h2>
      </div>
      <div className={bem("content")}>{children}</div>
    </div>
  );

  render() {
    const contents = [];
    for (let i = 0; i < 200; i += 1) {
      contents.push(
        <this.Content key={i} title="Title">
          About
        </this.Content>
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
