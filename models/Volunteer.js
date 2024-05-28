const { readData, writeData } = require('./fileHandler');
const fileName = 'volunteers.json';

class Volunteer {
  static getAll() {
    const volunteers = readData(fileName);
    return volunteers;
  }

  static save(volunteer) {
    const volunteers = readData(fileName);
    volunteers.push(volunteer);
    writeData(fileName, volunteers);
  }

  static reset() {
    writeData(fileName, []);
  }
}

module.exports = Volunteer;




