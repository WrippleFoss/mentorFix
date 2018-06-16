import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
const testSchema = `
type Query{
	hi: String
}
`;
const typeDefs = [testSchema,ResolutionsSchema];

const resolvers = {
    Query: {
        hi() {
            return 'Things are good.';
        }
    }
};
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
createApolloServer({
    schema
});