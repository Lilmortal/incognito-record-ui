import React from "react";
import { mount } from "enzyme";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";

import Root from "./Root";

let defaultProps;

beforeEach(() => {
  defaultProps = {};

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => ({ matches: true }))
    });
  });
});

const renderMount = (pathname = "/", props) =>
  mount(
    <IntlProvider locale="en">
      <MemoryRouter initialEntries={[pathname]}>
        <Root {...defaultProps} {...props} />
      </MemoryRouter>
    </IntlProvider>
  );

describe("header search visibility", () => {
  it("should render header search if in home page", () => {
    const root = renderMount();

    expect(root.find(".incognito-Header__search").exists()).toEqual(true);
  });

  it("should not render header search if not in home page", () => {
    const root = renderMount("/random");

    expect(root.find(".incognito-Header__search").exists()).toEqual(false);
  });
});
