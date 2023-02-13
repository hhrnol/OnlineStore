if (process.env.REACT_APP_API_TYPE === 'web') {
  module.exports = require('./prod/webHomeApi');
} else {
  module.exports = require('./dev/mockHomeApi');
}
