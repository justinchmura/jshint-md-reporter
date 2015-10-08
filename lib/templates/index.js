const fs = require('fs');
const path = require('path');

const folder = path.resolve(__dirname);
const templates = {
  body: null,
  item: null,
  itemHeader: null,
  noItems: null,
  summary: null
};

for (var template in templates) {
  templates[template] = fs.readFileSync(path.join(folder, template + '.md')).toString();
}

module.exports = templates;
