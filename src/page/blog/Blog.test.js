import React from "react";
import { mount } from "enzyme";
import { IntlProvider } from "react-intl";

import Calendar from "../../calendar";
import PostImage from "../../blog/postImage";
import Post from "../../blog/post";
import Blog from "./Blog";

const renderMount = props =>
  mount(
    <IntlProvider locale="en">
      <Blog {...props} />
    </IntlProvider>
  );

describe("hover handling", () => {
  it("should fire update date and image on post hover", () => {
    const blog = renderMount();

    const firstPost = blog.find(Post).first();

    firstPost.find(".incognito-Post").simulate("mouseEnter");
    blog.update();

    expect(firstPost.prop("date")).toEqual(blog.find(Calendar).prop("date"));
    expect(firstPost.prop("image")).toEqual(blog.find(PostImage).prop("type"));
  });
});
