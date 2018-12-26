import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import merge from 'lodash/merge';
const testSchema = `
type Query{
    hi: String,
    mentees: Mentee,
    mentors: Mentor
}
`;
const typeDefs = [ResolutionsSchema];

const testResolve = {
    Query: {
        hi() {
            return 'Things are good.';
        }
    }
};
//hi
const resolvers = merge(
    testResolve,ResolutionsResolvers
)
const schema = makeExecutableSchema({
    typeDefs
});
createApolloServer({
    schema
});