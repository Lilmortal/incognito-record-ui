import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello Reacssst!</div>;
};

if (__DEV__) {
  console.log("Dev mode");
}

ReactDOM.render(<Index />, document.getElementById("index"));
