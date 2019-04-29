import { GraphQLString } from 'graphql';
import MentorType from '../Types/Mentor';
import addMentorResolver from '../Resolvers/Mutations/addmentor';

export default {
  type: MentorType,
  args: {
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve: (parent, args) => addMentorResolver(parent, args),
};
