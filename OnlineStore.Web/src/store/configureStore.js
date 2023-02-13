if (process.env.REACT_APP_API_TYPE === 'web') {
  console.log('Mode: web');
  module.exports = require('./configureStore.prod');
} else {
  console.log('Mode: dev');
  module.exports = require('./configureStore.dev');
}
