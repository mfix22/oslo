const fs = require('fs')
const handlebars = require('handlebars')
const licenses = require('./licenses');
const { getPackage } = require('./helpers')

const getLicense = (file) => {
  return licenses[file.toLowerCase()]
}

const createFile = (file, otherArgs) => {
  const template = handlebars.compile(getLicense(file))
  const compiled = template({
    year : new Date().getFullYear(),
    name : getPackage().author
  })
  fs.writeFile('LICENSE.md', compiled, (err) => {
    if (err) throw err;
  });
}

module.exports =  createFile;
