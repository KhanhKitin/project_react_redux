import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <div className="container">
            <div className="row">
              <Switch>
                {this.showContentMenu(routes)}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default App;
