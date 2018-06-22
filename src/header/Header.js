import React from "react";

import createBem from "../util/createBem";
import Categories from "../categories";
import Search from "../ui/search";
import Navigation from "./navigation";
import Navicon from "./navicon";
import "./Header.scss";

const bem = createBem("incognito-header");

const Header = ({ isHomePage }) => (
  <header className={bem()}>
    <Navigation />
    <div className={bem("search")}>
      <Search />
    </div>
    {isHomePage && (
      <div className={bem("categories")}>
        <Navicon />
        <Categories
          categories={[
            { key: 0, text: "Docker" },
            { key: 1, text: "Node JS" },
            { key: 2, text: "Golang" },
            { key: 3, text: "Kubernetes" },
            { key: 4, text: "Terraform" },
            { key: 5, text: "AWS Lambda" },
            { key: 6, text: "AWS Cloudfront" },
            { key: 7, text: "Elastic Search" }
          ]}
        />
      </div>
    )}
  </header>
);

export default Header;
