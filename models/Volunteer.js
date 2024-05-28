let volunteers = [];

class Volunteer {
  static getAll() {
    return volunteers;
  }

  static save(volunteer) {
    volunteers.push(volunteer);
  }

  static reset() {
    volunteers = [];
  }
}

module.exports = Volunteer;
