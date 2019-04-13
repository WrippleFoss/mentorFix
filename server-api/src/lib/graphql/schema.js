const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
} = graphql;

const dummy = [
  {
    id: '1',
    admin: 'Abhishek',
    description: 'Is awesome',
    link: 'link up',
  },
  {
    id: '2',
    admin: 'AMit',
    description: 'Is awesome',
    link: 'link up',
  },
  {
    id: '3',
    admin: 'Vijay',
    description: 'Is awesome',
    link: 'link up',
  },
];

const dummy2 = [
  {
    id: '1',
    username: 'abc',
    name: 'abc',
    webinars: '2',
    verified: 'true',
    password: 'asasvbasfbvasfb',
    bio: 'nope',
    location: 'IN',
    links: 'NA',
    email: 'abc@gmail.com',
    followers: '4',
    expertise: '2',
  },
  {
    id: '2',
    username: 'def',
    name: 'def',
    webinars: '3',
    verified: 'false',
    password: 'svasasdvasv',
    bio: 'nope',
    location: 'IN',
    links: 'NA',
    email: 'def@gmail.com',
    followers: '2',
    expertise: '1',
  },
  {
    id: '3',
    username: 'ghi',
    name: 'ghi',
    webinars: '2',
    verified: 'true',
    password: 'adsasvasvwasrb',
    bio: 'nope',
    location: 'IN',
    links: 'NA',
    email: 'ghi@gmail.com',
    followers: '8',
    expertise: '9',
  },
];

const ConferenceType = new GraphQLObjectType({
  name: 'conference',
  fields: () => ({
    id: { type: GraphQLID },
    admin: { type: GraphQLString },
    description: { type: GraphQLString },
    link: { type: GraphQLString }, // topics, date and mentees left
  }),
});

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

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    conference: {
      type: ConferenceType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return dummy[0];
        // this is where we write code to get data from db
      },
    },
    mentor: {
      type: MentorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return dummy2[0];
        // this is where we write code to get data from db
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
});
