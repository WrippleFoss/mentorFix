import cluster from 'cluster';
import os from 'os';

import express from 'express';
import { PORT } from './config';
/* eslint-disable */
import MongoDb from '../lib/database/mongodb';
/* eslint-enable */

import middleware from './middleware';

const nofCPU = os.cpus().length;

// cluster is user to increase the effiency of the node
if (cluster.isMaster) {
  for (let i = 0; i < nofCPU; i += 1) {
    cluster.fork();
  }

  console.log(`Master is setting up with workers: ${nofCPU}`);

  cluster.on('online', (worker) => {
    console.log(`Worker is online :${worker}`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Worker died :${worker.process.pid} and signal ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  // For every master/worker start a new express server
  // app is initialized
  const app = express();

  // all the middleware are added
  middleware(app);

  // server is started
  app.listen(PORT, (error) => {
    if (error) {
      console.error(error);
    }
    console.log(`Server is started at ${PORT}`);
  });
}
