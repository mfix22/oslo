const { join } = require('path')

const getPackage = () => {
  try {
    // look for package.json in cwd
    const PACKAGE_PATH = join(process.cwd() + '/package.json')
    const package = require(PACKAGE_PATH)
    return package;
  } catch (e) {
    return {};
  }
}

module.exports.getPackage = getPackage;
