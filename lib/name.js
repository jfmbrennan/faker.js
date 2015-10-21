var faker = require('../index');

var _name = {

  firstName: function (gender) {
    if (typeof faker.definitions.name.male_first_name !== "undefined" && typeof faker.definitions.name.female_first_name !== "undefined") {
      gender = gender || faker.random.gender();
      if (gender === 'male') {
        return faker.random.array_element(faker.locales[faker.locale].name.male_first_name);
      } else {
        return faker.random.array_element(faker.locales[faker.locale].name.female_first_name);
      }
    }
    return faker.random.array_element(faker.definitions.name.first_name);
  },

  lastName: function (gender) {
    if (typeof faker.definitions.name.male_last_name !== "undefined" && typeof faker.definitions.name.female_last_name !== "undefined") {
      gender = gender || faker.random.gender();
      if (gender === 'male') {
        return faker.random.array_element(faker.locales[faker.locale].name.male_last_name);
      } else {
        return faker.random.array_element(faker.locales[faker.locale].name.female_last_name);
      }
    }
    return faker.random.array_element(faker.definitions.name.last_name);
  },

  findName: function (firstName, lastName, gender) {
//    var r = faker.random.number(8);
    gender = gender || faker.random.gender();
    firstName = firstName || faker.name.firstName(gender);
    lastName = lastName || faker.name.lastName(gender);
//    switch (r) {
//    case 0:
//      return faker.name.prefix(gender) + " " + firstName + " " + lastName;
//    case 1:
//      return firstName + " " + lastName + " " + faker.name.suffix();
//    }

    return firstName + " " + lastName;
  },

  prefix: function (gender) {
    if (typeof faker.definitions.name.male_prefix !== "undefined" && typeof faker.definitions.name.female_prefix !== "undefined") {
      gender = gender || faker.random.gender();
      if (gender === 'male') {
        return faker.random.array_element(faker.locales[faker.locale].name.male_prefix);
      } else {
        return faker.random.array_element(faker.locales[faker.locale].name.female_prefix);
      }
    }
    return faker.random.array_element(faker.definitions.name.prefix);
  },

  suffix: function () {
      return faker.random.array_element(faker.definitions.name.suffix);
  }
};

module.exports = _name;
