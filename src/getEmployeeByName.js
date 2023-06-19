const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const { employees } = data;

  const employee = employees
    .find((e) => e.firstName === employeeName || e.lastName === employeeName);

  return employee || {};
};

module.exports = getEmployeeByName;
