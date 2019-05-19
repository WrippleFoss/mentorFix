import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/HelloWorld";

class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default AppRoutes;
