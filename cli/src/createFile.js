const fs = require('fs')
const licenses = require('./licences');

const getLicense = file => licenses[file]

const createFile = (file, otherArgs) => {
  fs.writeFile('LICENSE.md', getLicense(file), (err) => {
    if (err) throw err;
  });
}

export default createFile;
