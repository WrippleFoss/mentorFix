import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createStore } from 'redux';
import { provider } from 'react-redux';

import App from '../../ui/App';

const httpLink = new HttpLink({
	uri: Meteor.absoluteUrl('graphql') //gives the absolute url for the app/
});
const cache = new InMemoryCache();

const client = new ApolloClient({
	link: httpLink,
	cache
});

const store = createStore({});

const ApolloApp = () => {
	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	);
};

Meteor.startup(() => {
	render(<ApolloApp />, document.getElementById('app'));
});
