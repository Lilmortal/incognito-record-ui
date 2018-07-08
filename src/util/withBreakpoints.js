import React from "react";

const withBreakpoints = Component =>
  class BreakpointHOC extends React.Component {
    state = {
      breakpoints: ""
    };

    componentDidMount() {
      let timer;
      window.onresize = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (window.matchMedia("screen and (min-width: 900px)").matches) {
            this.setState({ breakpoints: "lg" });
          } else {
            this.setState({ breakpoints: "sm" });
          }
        }, 250);
      };
    }

    render() {
      return <Component breakpoints={this.state.breakpoints} />;
    }
  };

export default withBreakpoints;
