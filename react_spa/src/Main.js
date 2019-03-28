import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Nina from "./Nina";
import Meg from "./Meg";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>My Dogs</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/nina">Nina</NavLink></li>
            <li><NavLink to="/meg">Meg</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/nina" component={Nina}/>
            <Route path="/meg" component={Meg}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
