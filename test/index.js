var R = require('ramda');
var assert = require('assert');
var reporter = require('../lib/reporter');

var defaultMsg = 'JSHint found no errors.';
var testReporter = R.pipe(R.flip, R.curry)(reporter.reporter)(true);

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
