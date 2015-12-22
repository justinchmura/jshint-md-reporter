## jshint-md-reporter

[![Build Status](https://travis-ci.org/justinchmura/jshint-md-reporter.svg?branch=master)](https://travis-ci.org/justinchmura/jshint-md-reporter)[![npm version](https://badge.fury.io/js/jshint-md-reporter.svg)](https://badge.fury.io/js/jshint-md-reporter)

This reporter is to be used with JSHint to log errors out to a file
in markdown. This is useful for creating error files that are easy
to view in any markdown viewer.

### [Example Output](example.md)

### Installation

```bash
$ npm install jshint-md-reporter --save-dev
```

### Usage

Using it with:

#### JSHint CLI

```bash
jshint --reporter node_modules/jshint-md-reporter/lib/reporter.js file.js
```

#### [Gulp](http://gulpjs.com/):

```javascript
Coming soon...
```

#### [Grunt](http://gruntjs.com):

```javascript
grunt.initConfig({
	jshint: {
		options: {
			reporter: require('jshint-md-reporter'),
			reporterOutput: 'jshint-report.md'
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
```

### Testing

To run the tests, you have to first make sure the dependencies are installed on
your system by running:

```bash
$ npm install
```

Then run `npm test` from the command line:

```bash
$ npm test
```

## Legal Stuff

jshint-md-reporter is Copyright 2015 Justin Chmura. All Rights Reserved.

Distributed under [MIT License](https://tldrlegal.com/license/mit-license).
