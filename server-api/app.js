import express from 'express';
import graphqlHTTP from 'express-graphql';

const schema = require('./schema');

const app = express();

app.use('/api/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('The server is listening on 4000');
});
