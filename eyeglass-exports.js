var watson = require('./index')

module.exports = function(eyeglass, sass) {
  return {
    sassDir: watson.includePaths[0]
  }
}
