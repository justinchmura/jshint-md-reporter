const fs = require('fs');
const R = require('ramda');
const assert = require('assert');
const reporter = require('../lib/reporter');

const defaultMsg = fs.readFileSync('./lib/templates/noItems.md');
const testReporter = R.pipe(R.flip, R.curry)(reporter.reporter)(true);

describe('jshint-md-reporter', function () {

  describe('No Errors', function () {

    it('returns default message on undefined', function () {
      var result = testReporter(undefined);
      assert.equal(result, defaultMsg);
    });

    it('returns default message on null', function () {
      var result = testReporter(null);
      assert.equal(result, defaultMsg);
    });

    it('returns default message on empty string', function () {
      var result = testReporter('');
      assert.equal(result, defaultMsg);
    });

    it('returns default message on empty array', function () {
      var result = testReporter([]);
      assert.equal(result, defaultMsg);
    });

    it('returns default message on empty object', function () {
      var result = testReporter({});
      assert.equal(result, defaultMsg);
    });

  });

});
