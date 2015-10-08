const R = require('ramda');
const templates = require('./templates');

/**
 * Helpers
 */

const isArray = R.allPass([R.isArrayLike, R.pipe(R.length, R.gt(0))]);
const isError = (code) => code && code[0] === 'E';
const createWriter =  R.curry(
  (testing, msg) => testing ? msg : process.stdout.write(msg)
);

const calculateFailures = function (results) {
  const codes = results.map((x) => x.error.code);
  return {
    failures: results.length,
    errors: codes.filter(isError).length,
    warnings: codes.filter(R.complement(isError)).length
  };
};

/**
 * Content Helpers
 */

function prepareContent(results) {
  return results.reduce((obj, element) => {
    if (obj.previous !== element.file) {
      obj.previous = element.file;
      obj.content += templates.itemHeader.replace('{file}', element.file);
    }
    obj.content += templates.item
      .replace('{class}', isError(element.error.code) ? 'danger' : 'warning')
      .replace('{code}', element.error.code)
      .replace('{line}', element.error.line)
      .replace('{character}', element.error.character)
      .replace('{evidence}', element.error.evidence)
      .replace('{reason}', element.error.reason);
    return obj;
  }, { previous: null, content: '' });
}

function prepareSummary(failureCounts) {
  return templates.summary
    .replace('{failures}', failureCounts.failures)
    .replace('{errors}', failureCounts.errors)
    .replace('{warnings}', failureCounts.warnings);
}

/**
 * Exports
 */

module.exports = {
  reporter: function (results, testing) {
    const writer = createWriter(testing);
    const errors = isArray(results) ? results : [];

    const failureCounts = calculateFailures(errors);
    const output = results && results.length > 0
      ? templates.body
        .replace('{content}', prepareContent(errors))
        .replace('{summary}', prepareSummary(failureCounts))
      : templates.noItems;

    return writer(output);
  }
};
