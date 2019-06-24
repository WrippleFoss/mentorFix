import React from 'react';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import App from './components/app';
import Login from './components/login/Login'

let Dash = () => <div>Dash</div>

const routes = ()=> (
  <Router>
    <App path="/" />
    <Dash path="dashboard" />
    <Login path="/login" />
  </Router>
)

export default routes;