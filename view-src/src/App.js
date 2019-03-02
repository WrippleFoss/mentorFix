import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
