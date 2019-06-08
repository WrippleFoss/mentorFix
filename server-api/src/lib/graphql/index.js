import { GraphQLSchema } from 'graphql';
import rootQuery from './query';
import rootMutation from './mutations';

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});
