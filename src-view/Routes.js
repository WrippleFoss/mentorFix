import React from 'react';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import App from './components/app';

let Dash = () => <div>Dash</div>

const routes = ()=> (
  <Router>
    <App path="/" />
    <Dash path="dashboard" />
  </Router>
)

export default routes;