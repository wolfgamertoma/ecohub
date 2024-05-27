let volunteers = [];

class Volunteer {
  static getAll() {
    return volunteers;
  }

  static save(volunteer) {
    volunteers.push(volunteer);
  }
}

module.exports = Volunteer;
