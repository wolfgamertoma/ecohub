const { readData, writeData } = require('./fileHandler');
const fileName = 'projects.json';

class Project {
  static getAll() {
    return readData(fileName);
  }

  static save(project) {
    const projects = readData(fileName);
    projects.push(project);
    writeData(fileName, projects);
  }

  static reset() {
    writeData(fileName, []);
  }
}

module.exports = Project;



