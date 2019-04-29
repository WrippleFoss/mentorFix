import { GraphQLID } from 'graphql';
import ConferenceType from '../Types/Conference';

import QueryResolver from '../Resolvers/Query/conference';

export default {
  type: ConferenceType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (parent, args) => QueryResolver(parent, args),
};
