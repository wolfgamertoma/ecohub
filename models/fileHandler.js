const fs = require('fs');
const path = require('path');

const readData = (fileName) => {
  const filePath = path.join(__dirname, fileName);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error);
    return [];
  }
};

const writeData = (fileName, data) => {
  const filePath = path.join(__dirname, fileName);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(`Error writing file ${fileName}:`, error);
  }
};

module.exports = { readData, writeData };



