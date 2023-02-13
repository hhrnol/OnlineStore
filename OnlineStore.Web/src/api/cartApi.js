if (process.env.REACT_APP_API_TYPE === 'web') {
  module.exports = require('./prod/webCartApi');
} else {
  module.exports = require('./dev/mockCartApi');
}
