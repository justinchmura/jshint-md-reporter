const fs = require('fs');
const path = require('path');
const R = require('ramda');

const removeNewLines = R.replace(/^\s+|\s+$/g, '');
const folder = path.resolve(__dirname);
const templates = {
  body: null,
  error: null,
  fileHeader: null,
  noItems: null,
  summary: null
};

var mdPath;
for (var template in templates) {
  mdPath = path.join(folder, template + '.md');
  templates[template] = removeNewLines(fs.readFileSync(mdPath).toString());
}

module.exports = templates;
