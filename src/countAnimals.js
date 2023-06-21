const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const animalCount = {};
  data.species.forEach((species) => {
    animalCount[species.name] = species.residents.length;
  });

  return animal
    ? data.species.find((species) => species.name === animal.species)
      .residents.filter((resident) => (animal.sex ? resident.sex === animal.sex : true)).length
    : animalCount;
};

module.exports = countAnimals;
