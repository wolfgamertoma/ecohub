const { readData, writeData } = require('./fileHandler');
const fileName = 'projects.json';

class Project {
  static getAll() {
    const projects = readData(fileName);
    console.log("Get all projects:", projects);
    return projects;
  }

  static save(project) {
    const projects = readData(fileName);
    projects.push(project);
    writeData(fileName, projects);
    console.log("Saved project:", project);
  }

  static reset() {
    writeData(fileName, []);
    console.log("Reset projects");
  }
}

module.exports = Project;






