const fs = require('fs')
const licenses = require('./licenses');

const getLicense = (file) => {
  return licenses[file.toLowerCase()]
}

const createFile = (file, otherArgs) => {
  fs.writeFile('LICENSE.md', getLicense(file), (err) => {
    if (err) throw err;
  });
}

module.exports =  createFile;
