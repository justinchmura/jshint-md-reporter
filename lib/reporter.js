const R = require('ramda');
const templates = require('./templates');

/**
 * Helpers
 */

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
  if (results.length === 0) { return templates.noItems; }
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
  if (failureCounts.failures === 0) { return ''; }
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
    const failureCounts = calculateFailures(results);
    const output = templates.body
      .replace('{content}', prepareContent(results))
      .replace('{summary}', prepareSummary(failureCounts));

    writer(output);
  }
};
