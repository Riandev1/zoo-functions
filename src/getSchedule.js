const data = require('../data/zoo_data');

const weekDays = (...weekDaysList) => {
  const objDays = {};

  weekDaysList.flat().forEach((weekDay) => {
    if (weekDay !== 'Monday') {
      objDays[weekDay] = {
        officeHour: `Open from ${data.hours[weekDay].open}am until ${data.hours[weekDay].close}pm`,
        exhibition: data.species
          .filter((specie) => specie.availability.includes(weekDay))
          .map((animal) => animal.name),
      };
    } else if (weekDay === 'Monday') {
      objDays[weekDay] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });

  return objDays;
};

const availabilityByAnimal = (animalName) => data.species
  .find((specie) => specie.name === animalName).availability;

const getSchedule = (target) => {
  if (data.species.map((specie) => specie.name).includes(target)) {
    return availabilityByAnimal(target);
  }

  if (Object.keys(data.hours).includes(target)) {
    return weekDays(target);
  }

  return weekDays(Object.keys(data.hours));
};

module.exports = getSchedule;
