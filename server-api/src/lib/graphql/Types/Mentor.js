import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

const MentorType = new GraphQLObjectType({
  name: 'mentor',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    webinars: { type: GraphQLString }, // Type will be changed to `WebinarTypes`
    verified: { type: GraphQLBoolean },
    password: { type: GraphQLString },
    bio: { type: GraphQLString },
    location: { type: GraphQLString },
    links: { type: GraphQLString }, // Type will be changed to `{}_public profile links_`
    email: { type: GraphQLString },
    followers: { type: GraphQLString }, // Type will be changed to `menteeTypeID`
    expertise: { type: GraphQLString }, // Type will be changed to `[]_A list of expertise_`
  }),
});

export default MentorType;
