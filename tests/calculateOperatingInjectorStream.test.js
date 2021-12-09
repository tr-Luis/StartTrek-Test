const calculateOperatingInjectorStream = require('../functions/calculateOperatingInjectorStream');

test('Con daño del inyector a, b y c del 0% y velocidad de la luz de 100%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 100)).toEqual({
    streams: [100, 100, 100],
    operatingTime: 'Infinito',
    maximumSpeedPercentage: 100
  });
});

test('Con daño del inyector a, b y c del 0% y velocidad de la luz de 90%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 90)).toEqual({
    streams: [90, 90, 90],
    operatingTime: 'Infinito',
    maximumSpeedPercentage: 100
  });
});

test('Con daño del inyector a, b y c del 0% y velocidad de la luz de 30%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 30)).toEqual({
    streams: [30, 30, 30],
    operatingTime: 'Infinito',
    maximumSpeedPercentage: 100
  });
});

test('Con daño del inyector A 20%, B 10% y C del 0% y velocidad de la luz de 100%', () => {
  expect(calculateOperatingInjectorStream([20, 10, 0], 100)).toEqual({
    streams: [90, 100, 110],
    operatingTime: 90,
    maximumSpeedPercentage: 90
  });
});

test('Con daño del inyector A 0%, B 0% y C del 100% y velocidad de la luz de 80%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 100], 80)).toEqual({
    streams: [120, 120, 0],
    operatingTime: 80,
    maximumSpeedPercentage: 200/3
  });
});

test('Con daño del inyector a, b y c del 0% y velocidad de la luz de 150%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 150)).toEqual({
    streams: [150, 150, 150],
    operatingTime: 50,
    maximumSpeedPercentage: 100
  });
});

test('Con daño del inyector A 0%, B 0% y C del 30% y velocidad de la luz de 140%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 30], 140)).toEqual({
    streams: [150, 150, 120],
    operatingTime: 50,
    maximumSpeedPercentage: 90
  });
});

test('Con daño del inyector A 20%, B 50% y C del 40% y velocidad de la luz de 170%', () => {
  expect(calculateOperatingInjectorStream([20, 50, 40], 170)).toMatch(/Unable to comply/);
});

test('Con cualquier porcentaje de daño del inyector y velocidad de la luz mayor que 199%', () => {
  expect(calculateOperatingInjectorStream([101, 200, 3000], 410)).toMatch(/Unable to comply/);
});

test('Con daño del inyector A 100%, B 100% y C del 0% y velocidad de la luz de 30%', () => {
  expect(calculateOperatingInjectorStream([100, 100, 0], 30)).toEqual({
    streams: [0, 0, 90],
    operatingTime: 'Infinito',
    maximumSpeedPercentage: 100/3
  });
});

test('Con daño del inyector A 100%, B 100% y C del 0% y velocidad de la luz de 30%', () => {
  expect(calculateOperatingInjectorStream([100, 100, 100], 0)).toEqual({
    streams: [0, 0, 0],
    operatingTime: 'Infinito',
    maximumSpeedPercentage: 0
  });
});

test('Con daño del inyector A 100%, B 100% y C del 0% y velocidad de la luz de 30%', () => {
  expect(calculateOperatingInjectorStream([0, 0, 0], 0)).toEqual({
    streams: [0, 0, 0],
    operatingTime: 'Infinito',
    maximumSpeedPercentage: 100
  });
});

test('Con daño del inyector A 100%, B 100% y C del 0% y velocidad de la luz de 30%', () => {
  expect(calculateOperatingInjectorStream([99, 99, 0], 1)).toEqual({
    streams: [1, 1, 1],
    operatingTime: 1,
    maximumSpeedPercentage: 102
  });
});
