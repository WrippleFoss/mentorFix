import { GraphQLID } from 'graphql';
import MentorType from '../Types/Mentor';

import MentorResolver from '../Resolvers/Query/mentor';

export default {
  type: MentorType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (parent, args) => MentorResolver(parent, args),
};
