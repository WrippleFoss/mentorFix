const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const app = express();

app.use('/api/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log("The server is listening on 4000");
})