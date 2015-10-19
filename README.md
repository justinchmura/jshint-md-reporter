## jshint-md-reporter

This reporter is to be used with JSHint to log errors out to a file
in markdown. This is useful for creating error files that are easy
to view in any markdown viewer.

### Example Output

```
# JSHint Report

### test.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W119 | 4 | 18 | window.onload = () => { | 'arrow function syntax (=>)' is only available in ES6 (use esnext option). |

---

#### Summary

Found 1 failures - 0 errors - 1 warnings
```

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
