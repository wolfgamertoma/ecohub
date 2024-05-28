const { readData, writeData } = require('./fileHandler');
const fileName = 'volunteers.json';

class Volunteer {
  static getAll() {
    const volunteers = readData(fileName);
    console.log("Get all volunteers:", volunteers);
    return volunteers;
  }

  static save(volunteer) {
    const volunteers = readData(fileName);
    volunteers.push(volunteer);
    writeData(fileName, volunteers);
    console.log("Saved volunteer:", volunteer);
  }

  static reset() {
    writeData(fileName, []);
    console.log("Reset volunteers");
  }
}

module.exports = Volunteer;



