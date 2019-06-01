import { GraphQLSchema } from 'graphql';
import rootQuery from './query';

module.exports = new GraphQLSchema({
  query: rootQuery
  // mutation: Mutations,
});
