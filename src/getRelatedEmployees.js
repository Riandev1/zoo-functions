const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((emp) => emp.managers.find((empi) => empi === id));

const getRelatedEmployees = (managerId) => {
  const manager = data.employees.find((emp) => emp.id === managerId);

  if (!manager || manager.managers.length !== 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees
    .filter((emp) => emp.managers.includes(managerId))
    .map((emp) => `${emp.firstName} ${emp.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
