const getOpeningHours = require('../src/getOpeningHours');

describe('getOpeningHours', () => {
  const closedMessage = 'The zoo is closed';
  const openMessage = 'The zoo is open';

  it('deve retornar o objeto de horários de funcionamento quando nenhum argumento é fornecido', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('deve retornar "The zoo is closed" para Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closedMessage);
  });

  it('deve retornar "The zoo is open" para Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(openMessage);
  });

  it('deve retornar "The zoo is closed" para Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closedMessage);
  });

  it('deve retornar "The zoo is open" para Saturday e 10:00-AM', () => {
    expect(getOpeningHours('Saturday', '10:00-AM')).toBe(openMessage);
  });

  it('deve retornar "The zoo is closed" para Sunday e 07:00-PM', () => {
    expect(getOpeningHours('Sunday', '07:00-PM')).toBe(openMessage);
  });

  it('deve retornar "The zoo is open" para Thursday e 11:00-AM', () => {
    expect(getOpeningHours('Thursday', '11:00-AM')).toBe(openMessage);
  });

  it('deve lançar uma exceção para minutos inválidos', () => {
    expect(() => (getOpeningHours('Tuesday', '09:60-AM'))).toThrow('The minutes must be between 0 and 59');
  });

  it('deve lançar uma exceção para minutos em formato inválido', () => {
    expect(() => (getOpeningHours('Sunday', '09:c0-AM'))).toThrow('The minutes should represent a number');
  });

  it('deve lançar uma exceção para horas inválidas', () => {
    expect(() => (getOpeningHours('Monday', '13:00-AM'))).toThrow('The hour must be between 0 and 12');
  });
});
