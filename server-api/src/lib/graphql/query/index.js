const graphql = require('graphql');
const ConferenceType = require('./types/conferenceType');
const MentorType = require('./types/mentorType');
const mentorModel = require('../../database/models/mentor');

const { GraphQLObjectType, GraphQLID } = graphql;

const dummy = [
  {
    id: '1',
    admin: 'Abhishek',
    description: 'Is awesome',
    link: 'link up'
  },
  {
    id: '2',
    admin: 'AMit',
    description: 'Is awesome',
    link: 'link up'
  },
  {
    id: '3',
    admin: 'Vijay',
    description: 'Is awesome',
    link: 'link up'
  }
];

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    conference: {
      type: ConferenceType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return dummy[0];
        // this is where we write code to get data from db
      }
    },
    mentor: {
      type: MentorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return {};
      }
    }
  }
});
module.exports = rootQuery;
