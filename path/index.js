const { sep } = require('path');

const getParentDir = (path) => path.split(sep).slice(0, -1).join(sep);

module.exports = {
  getParentDir
};