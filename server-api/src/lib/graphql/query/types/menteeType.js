const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = require('graphql');

const MenteeType = new GraphQLObjectType({
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
    following: { type: GraphQLString } // Type will be changed to `[]_A list of expertise_`
  })
});

module.exports = MenteeType;
