const fs = require('fs');
const R = require('ramda');
const assert = require('assert');
const reporter = require('../lib/reporter');

const removeNewLines = R.replace(/^\s+|\s+$/g, '');
const defaultMsg = removeNewLines(fs.readFileSync('./lib/templates/noItems.md').toString());
const testReporter = R.pipe(R.flip, R.curry)(reporter.reporter)(true);

describe('jshint-md-reporter', function () {

  describe('No Errors', function () {

    it('returns default message on undefined', function () {
      const result = testReporter(undefined);
      assert.equal(result, defaultMsg);
    });

    it('returns default message on null', function () {
      const result = testReporter(null);
      assert.equal(result, defaultMsg);
    });

    it('returns default message on empty string', function () {
      const result = testReporter('');
      assert.equal(result, defaultMsg);
    });

    it('returns default message on empty array', function () {
      const result = testReporter([]);
      assert.equal(result, defaultMsg);
    });

    it('returns default message on empty object', function () {
      const result = testReporter({});
      assert.equal(result, defaultMsg);
    });

  });

});
