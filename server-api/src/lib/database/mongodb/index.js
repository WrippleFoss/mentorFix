import mongoose from 'mongoose';
import { DB_URL } from './config';

const { NODE_ENV } = process.env;

mongoose.Promise = global.Promise;

if (NODE_ENV === 'development') {
  mongoose.set('useCreateIndex', true);
  mongoose.set('debug', true);
}

try {
  mongoose.connect(DB_URL, { useNewUrlParser: true });
} catch (error) {
  mongoose.createConnection(DB_URL, { useNewUrlParser: true });
}

module.exports = () => (mongoose.connection
  .once('open', () => console.log('MongoDb is running'))
  .on('error', (err) => {
    console.error(err);
    throw err;
  })
);
