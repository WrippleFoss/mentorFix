import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Signup from './views/signup';
import Home from './views/home';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const history = createBrowserHistory();

const App = ({ data }) => {

	return (
			<Router history={history}>
				<Switch>
					<Route path="/signup" component={Signup}/>
					<Route path="/" render={()=><Home data={data}/>}/>
				</Switch>
			</Router>
	);
};

const hiQuery = gql`
	{
		hi
	}
`;

export default graphql(hiQuery)(App);
