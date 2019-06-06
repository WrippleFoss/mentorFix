import { GraphQLObjectType, GraphQLString } from 'graphql';
import mentorType from '../query/types/mentorType';
import mentorModel from '../../database/models/mentor';

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addMentor: {
      type: mentorType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        let mentor = new mentorModel({
          email: args.email,
          password: args.password
        });
        return mentor.save();
      }
    }
  }
});

export default rootMutation;
