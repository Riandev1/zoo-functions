const handlerElephants = require('../src/handlerElephants');

describe('handlerElephants', () => {
  const COUNT_ARGUMENT = 'count';
  const NAMES_ARGUMENT = 'names';
  const AVERAGE_AGE_ARGUMENT = 'averageAge';
  const LOCATION_ARGUMENT = 'location';
  const POPULARITY_ARGUMENT = 'popularity';
  const AVAILABILITY_ARGUMENT = 'availability';

  it('deve retornar o número inteiro 4 para o argumento count', () => {
    const result = handlerElephants(COUNT_ARGUMENT);
    expect(result).toBe(4);
  });

  it('deve retornar um array de nomes que inclui o nome "Jefferson" para o argumento names', () => {
    const result = handlerElephants(NAMES_ARGUMENT);
    expect(result).toContain('Jefferson');
  });

  it('deve retornar um número próximo a 10.5 para o argumento averageAge', () => {
    const result = handlerElephants(AVERAGE_AGE_ARGUMENT);
    expect(result).toBeCloseTo(10.5);
  });

  it('deve retornar a string "NW" para o argumento location', () => {
    const result = handlerElephants(LOCATION_ARGUMENT);
    expect(result).toBe('NW');
  });

  it('deve retornar um número igual ou maior a 5 para o argumento popularity', () => {
    const result = handlerElephants(POPULARITY_ARGUMENT);
    expect(result).toBeGreaterThanOrEqual(5);
  });

  it('deve retornar um array de dias da semana que não contém "Monday" para o argumento availability', () => {
    const result = handlerElephants(AVAILABILITY_ARGUMENT);
    expect(Array.isArray(result)).toBe(true);
    expect(result.includes('Monday')).toBe(false);
  });

  it('deve retornar undefined quando nenhum argumento é fornecido', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });
});
