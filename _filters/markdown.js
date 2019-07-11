const marked = require('marked');

module.exports = function(value) {
  return marked(value);
};