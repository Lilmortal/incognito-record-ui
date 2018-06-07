import React from "react";
import { Transition } from "react-spring";

import createBem from "../../util/createBem";
import "./DateTime.scss";

const bem = createBem("wifi-DateTime");

export default class DateTime extends React.PureComponent {
  state = {
    date: 0
  };

  render() {
    return (
      <div className={bem()}>
        <Transition>{() => <div className={bem("topLine")} />}</Transition>
        <div className={bem("date")}>{this.state.date}</div>
        <Transition>{() => <div className={bem("bottomLine")} />}</Transition>
      </div>
    );
  }
}
