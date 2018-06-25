import React from "react";
import { IntlProvider } from "react-intl";
// import { Keyframes } from "react-spring";
import { mount } from "enzyme";
import Categories from "./Categories";

let defaultProps;

// jest.useFakeTimers();

beforeEach(() => {
  defaultProps = {
    categories: [
      {
        id: 0,
        key: 0,
        text: "text1"
      },
      {
        id: 1,
        key: 1,
        text: "text2"
      }
    ]
  };
});

afterEach(() => {
  jest.clearAllTimers();
});

const renderMount = props =>
  mount(
    <IntlProvider locale="en">
      <Categories {...defaultProps} {...props} />
    </IntlProvider>
  );

it("should render categories", () => {
  const categories = renderMount();

  setTimeout(() => {}, 20000);
  //   jest.runAllTimers();

  categories
    .find(".incognito-Categories")
    .filterWhere(category => category.is("div"))
    .prop("onMouseEnter")();

  categories.update();

  categories.update();

  //   console.log(categories.debug());
  //   expect(categories.find(".incognito-Categories__category").debug()).toEqual("text");
});
