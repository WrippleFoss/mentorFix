import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
const testSchema = `
type Query{
    hi: String,
    users: [User],
    mentors: [Mentor]
}
`;
const typeDefs = [testSchema,ResolutionsSchema];

const resolvers = {
    Query: {
        hi() {
            return 'Things are good.';
        },
        users(){
            return[
                {
                    _id:"efoinenfonie",
                    name:"Abhishek Prasad"
                },
                {
                    _id: "efoinenfonie",
                    name: "Abhishek Prasad"
                }
            ]
        },
        mentors(){
            return [
                {
                    _id:"afeqfqeg",
                    name:"Mentor 1"
                }
            ]
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