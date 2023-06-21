const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const responsibleForFirstAnimal = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const filterasSpecie = data.species
    .find((specie) => specie.id === responsibleForFirstAnimal).residents;
  return Object.values(filterasSpecie.sort((a, b) => a.age - b.age)[filterasSpecie.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
