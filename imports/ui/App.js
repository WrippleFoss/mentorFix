import React from 'react';
import Nav from './components/nav';
import UserForm from './components/UserForm';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './style.css';
import CardExampleExpandable from './components/card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({ data }) => {
    return (
        <MuiThemeProvider>
		<React.Fragment>
			<Nav things={data.hi} />
			<h1>Mentor fix is an open source platform where users can become mentors and find other users who can benifit from their mentoring.</h1>
			<UserForm />
            <CardExampleExpandable />
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
