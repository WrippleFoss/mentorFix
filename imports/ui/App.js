import React from 'react';
import Nav from './components/nav';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const App = ({ data }) => {
	return (
		<div>
			<h1>Hula hooping is cool</h1>

			<Nav things={data.hi} />
		</div>
	);
};

const hiQuery = gql`
	{
		hi
	}
`;

export default graphql(hiQuery)(App);
