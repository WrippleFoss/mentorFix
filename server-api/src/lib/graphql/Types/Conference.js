import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const ConferenceType = new GraphQLObjectType({
  name: 'conference',
  fields: () => ({
    id: { type: GraphQLID },
    admin: { type: GraphQLString },
    description: { type: GraphQLString },
    link: { type: GraphQLString }, // topics, date and mentees left
  }),
});

export default ConferenceType;
