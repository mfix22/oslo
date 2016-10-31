const fs = require('fs')
const path = require('path')
const DIR_NAME = path.join(__dirname, '../assets/documents/')

const getLicenses = () => {
  return fs.readdirSync(DIR_NAME).reduce((accum, fileName) => {
    const file = fs.readFileSync(DIR_NAME + fileName, 'utf-8');
    return Object.assign({}, accum, {
      [fileName.split('_LICENSE')[0].toLowerCase()] : file
    });
  }, {})
}

module.exports = getLicenses();
