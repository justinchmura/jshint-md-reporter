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

for (var template in templates) {
  let mdPath = path.join(folder, template + '.md');
  templates[template] = removeNewLines(fs.readFileSync(mdPath).toString());
}

module.exports = templates;
