let projects = [];

class Project {
  static getAll() {
    return projects;
  }

  static save(project) {
    projects.push(project);
  }
}

module.exports = Project;
