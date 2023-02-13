if (process.env.REACT_APP_API_TYPE === 'web') {
  module.exports = require('./prod/webProductApi');
} else {
  module.exports = require('./dev/mockProductApi');
}
