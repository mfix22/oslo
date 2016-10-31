const { join } = require('path')
const PACKAGE_PATH = join(__dirname + '/../package.json')
const package = require(PACKAGE_PATH)

const getPackage = () => package;

module.exports.getPackage = getPackage;
