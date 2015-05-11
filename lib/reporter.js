var R = require('ramda');

/**
 * Helper Functions
 */

// Impure

var impure = {
  write: R.curry(function (testing, msg) { 
    return testing ? msg : process.stdout.write(msg);
  })
};

// Pure

var validErrors = R.allPass([R.isArrayLike, R.pipe(R.length, R.gt(R.__, 0))]);

var groupErrors = R.pipe(R.groupBy('file'), R.cond(
  [R.length(R.__, 0), R.identity],
  [R.T, '']
));

/**
 * Reporter Exports
 */

var app = function (errors, testing) {
  var write = impure.write(testing);
  return R.pipe(
    R.cond(
      [R.compose(R.not, validErrors), R.always('JSHint found no errors.')],
      [R.T, R.pipe(groupErrors, R.always(''))]
    ),
    write
  )(errors);
}

module.exports = { reporter: app };
