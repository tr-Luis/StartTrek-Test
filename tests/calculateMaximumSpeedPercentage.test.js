const calculateMaximunSpeedPercentage = require('../functions/calculateMaximumSpeedPercentage');

test('Con daño del inyector a, b y c del 0% y velocidad de la luz de 100%', () => {
  expect(calculateMaximunSpeedPercentage([0, 0, 0])).toBe(100);
});

test('Con el injector A dañado un 20%, B un 10% y C un 0% y velocidad de la luz de 100%', () => {
  expect(calculateMaximunSpeedPercentage([20, 10, 0])).toBe(90);
});

test('Con el injector A dañado un  0%, B un 0% y C un 100% y velocidad de la luz de 100%', () => {
  expect(calculateMaximunSpeedPercentage([0, 0, 100])).toBe(200/3);
});

test('Con el injector A dañado un  0%, B un 0% y C un 30% y velocidad de la luz de 140%', () => {
  expect(calculateMaximunSpeedPercentage([0, 0, 30])).toBe(90);
});

test("Con el injector A dañado un  20%, B un 50% y 40 un 100% y velocidad de la luz de 170%", () => {
  expect(calculateMaximunSpeedPercentage([20, 50, 40])).toBe(190/3);
});

test('Con cualquier porcentaje de daño del inyector y velocidad de la luz superior al 199%', () => {
  expect(calculateMaximunSpeedPercentage([101, 200, 3000])).toBe(0);
});

test('Con el injector A dañado un  100%, B un 100% y C un 0% y velocidad de la luz de  30%', () => {
  expect(calculateMaximunSpeedPercentage([100, 100, 0])).toBe(100/3);
});

test('Con el injector A dañado un  100%, B un 100% y C un 0% y velocidad de la luz de  30%', () => {
  expect(calculateMaximunSpeedPercentage([])).toBe(0);
});
