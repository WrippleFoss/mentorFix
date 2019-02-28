const graphql = require('graphql');

const { GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID } = graphql;

var dummy = [
    {id:'1',admin:'Abhishek',description:'Is awesome',link:'link up'},
    {id:'2',admin:'AMit',description:'Is awesome',link:'link up'},
    {id:'3',admin:'Vijay',description:'Is awesome',link:'link up'}
];

const ConferenceType = new GraphQLObjectType({
    name:'conference',
    fields:()=>({
        id:{type:GraphQLID},
        admin:{type:GraphQLString},
        description:{type:GraphQLString},
        link:{type:GraphQLString}//topics, date and mentees left
    })
});

const rootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        conference:{
            type: ConferenceType,
            args:{
                id:{type:GraphQLID}
            },
            resolve(parent,args){
                return dummy[0];
                //this is where we right code to get data from db
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: rootQuery
});