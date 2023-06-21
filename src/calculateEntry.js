const data = require('../data/zoo_data');

const countEntrants = (peopleArray) =>
  peopleArray.reduce((count, person) => {
    const { child, adult, senior } = count;
    const { age } = person;
    if (age < 18) {
      return { ...count, child: child + 1 };
    }
    if (age < 50) {
      return { ...count, adult: adult + 1 };
    }
    return { ...count, senior: senior + 1 };
  }, { senior: 0, child: 0, adult: 0 });

const calculateEntry = (peopleArray) => {
  if (!peopleArray || peopleArray.length === 0) {
    return 0;
  }

  const { child, adult, senior } = countEntrants(peopleArray);
  const totalChild = data.prices.child * child;
  const totalAdult = data.prices.adult * adult;
  const totalSenior = data.prices.senior * senior;
  const totalPeople = totalChild + totalAdult + totalSenior;

  return parseFloat(totalPeople.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
