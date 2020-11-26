const fs = require('fs');

module.exports = (filePath, options, callback) => {
  const content = fs.readFileSync(filePath);
  const filterSchema = JSON.parse(content);
  const build = filter(options, filterSchema);
  return callback(null, build);
};

function filter (source, filterSchema) {
  let destination;

  if (Array.isArray(source)) {
    destination = [];
    for (let entry of source) {
      destination.push(filter(entry, filterSchema));
    }
    return destination;
  }

  destination = {};
    for (let key of Object.keys(filterSchema)) {
      if (!filterSchema[key] || !source[key]) continue;
      
      if (typeof source[key] === 'object') {
        destination[key] = filter(source[key], filterSchema[key]);
      } else {
        destination[key] = source[key];
      }
    }
    return destination;

}