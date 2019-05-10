const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  module.exports = require('./server.dev');
}
if (NODE_ENV === 'production') {
  module.exports = require('./server.pro');
}
