import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Home from "./components/HelloWorld";
import { Router } from "@reach/router"
import {AppLayout, PublicLayout, LoginLayout} from './components/Layout'

class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <Home path="/" exact  />
                <AppLayout path="/app" />
                <PublicLayout path="/public" />
                <LoginLayout path="/login" />
                <NotFound default />
            </Router>
        );
    }
}

export default AppRoutes;
