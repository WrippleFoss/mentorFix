import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import Mutation from './Mutations';
import Querys from './Query';

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...Querys,
  },
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    ...Mutation,
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: Mutations,
});
