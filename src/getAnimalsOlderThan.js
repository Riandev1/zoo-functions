const data = require('../data/zoo_data');
function getAnimalsOlderThan(especie, idadeMinima) {
  const animalDaEspecie = data.species.find(animal => animal.name === especie);
  
  if (!animalDaEspecie) {
    return false;
  }
  
  return animalDaEspecie.residents.every(animal => animal.age >= idadeMinima);
}

const especie = 'lions';
const idadeMinima = 10;

const resultado = getAnimalsOlderThan(especie, idadeMinima);
console.log(resultado); 

module.exports = getAnimalsOlderThan;
