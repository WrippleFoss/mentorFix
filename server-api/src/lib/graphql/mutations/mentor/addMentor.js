import { GraphQLString } from 'graphql';
import mentorType from '../../query/types/mentorType';
import mentorModel from '../../../database/models/mentor';

const addMentor = {
  type: mentorType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parent, args) {
    const mentor = new mentorModel({
      email: args.email,
      password: args.password,
      verified: false
    });
    return mentor.save();
  }
};

export default addMentor;
