var R = require('ramda');

/**
 * Helper Functions
 */

var validErrors = R.allPass([R.isArrayLike, R.pipe(R.length, R.gt(R.__, 0))]);

function reporter(errors, testing) {
  var defaultMsg = 'JSHint found no errors.';
  if (!validErrors(errors)) {
    return testing ? defaultMsg : console.log(defaultMsg);
  }
}

module.exports = { reporter: reporter };
