import { GraphQLObjectType } from 'graphql';
import AddMentor from './mentor/addMentor';

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addMentor: AddMentor
  }
});

export default rootMutation;
