const fs = require('fs');
const path = require('path');

const getFilePath = (fileName) => {
  return path.join(__dirname, fileName);
};

const readData = (fileName) => {
  const filePath = getFilePath(fileName);
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]', 'utf8'); // Create file if it doesn't exist
    }
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`Read data from ${fileName}:`, data);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error);
    return [];
  }
};

const writeData = (fileName, data) => {
  const filePath = getFilePath(fileName);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Written data to ${fileName}:`, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing file ${fileName}:`, error);
  }
};

module.exports = { readData, writeData };






