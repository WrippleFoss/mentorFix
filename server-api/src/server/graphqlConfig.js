import graphqlHTTP from 'express-graphql';

import schema from '../lib/graphql';

export default app =>
  app.use(
    '/api/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );
