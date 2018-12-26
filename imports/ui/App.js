import React from 'react';
import Nav from './components/nav';
import UserForm from './components/UserForm';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './style.css';
import CardExampleExpandable from './components/card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/homePage';

const App = ({ data }) => {
    return (
        <MuiThemeProvider>
			<React.Fragment>
				<Nav things={data.hi} />
				<HomePage />
			</React.Fragment>
		</MuiThemeProvider>
	);
};

const hiQuery = gql`
	{
		hi
	}
`;

export default graphql(hiQuery)(App);
