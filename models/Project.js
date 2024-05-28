const { readData, writeData } = require('./fileHandler');
const fileName = 'projects.json';

class Project {
  static getAll() {
    const projects = readData(fileName);
    return projects;
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





