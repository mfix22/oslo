const fs = require('fs')
const handlebars = require('handlebars')
const licenses = require('./licenses');
const { getPackage } = require('./helpers')

const getLicense = (file) => {
  return licenses[file.toLowerCase()]
}

const createFile = (file, otherArgs) => {
  const template = handlebars.compile(getLicense(file))
  const pkg = getPackage();
  let data = pkg.oslo;
  data = Object.assign({}, data, {
    year : new Date().getFullYear(),
    name : pkg.author,
    description : pkg.description
  })
  
  fs.writeFile('LICENSE.md', template(data), (err) => {
    if (err) throw err;
  });
}

module.exports =  createFile;
