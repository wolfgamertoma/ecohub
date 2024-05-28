let projects = [];

class Project {
  static getAll() {
    return projects;
  }

  static save(project) {
    projects.push(project);
  }

  static reset() {
    projects = [];
  }
}

module.exports = Project;


