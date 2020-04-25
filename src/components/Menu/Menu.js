import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const routes = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lý sản phẩm",
    to: "/product-list",
    exact: true,
  },
];

const MenuCustom = ({ lable, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "nav-item active kitin" : "nav-item";
        return (
          <li className={active}>
            <Link to={to} className="nav-link">{lable}</Link>
          </li>
        );
      }}
    />
  );
};

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Call API
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this.showMenu(routes)}
          </ul>
        </div>
      </nav>
    );
  }
  showMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <MenuCustom
            key={index}
            lable={route.name}
            to={route.to}
            activeOnlyWhenExact={route.exact}
          />
        );
      });
    }
    return result;
  };
}
