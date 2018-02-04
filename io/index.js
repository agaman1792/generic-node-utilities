const fs = require('fs');

const countDirectoryContents = (dir) => {
  if (!fs.existsSync(dir))
    return 0;

  return fs.readdirSync(dir).length
}

const createIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const readJsonFile = (filePath) => {
  if (!fs.existsSync(filePath))
    throw `Could not load file ${filePath}`;

  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (ex) {
    throw ex;
  }
};

module.exports = {
  countDirectoryContents, createIfNotExists, readJsonFile
};