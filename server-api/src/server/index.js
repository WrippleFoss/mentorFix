import express from 'express';
import graphqlConfig from './graphqlConfig';
import MongoDb from '../lib/database/mongodb';
import { PORT } from './config';

// app is initialized
const app = express();

// all the middleware are defined here
graphqlConfig(app);

MongoDb();

// server is started
app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});
