const calculateMaximumIndefiniteStream = require('../functions/calculateMaximumIndefiniteStream');

test('Con 0% de daño el flujo máximo indefinido es 100\n', () => {
  expect(calculateMaximumIndefiniteStream(0)).toBe(100);
});

test('Con 40% de daño el flujo máximo indefinido es 60\n', () => {
  expect(calculateMaximumIndefiniteStream(40)).toBe(60);
});

test('Con 100% de daño el flujo máximo indefinido es 0\n', () => {
  expect(calculateMaximumIndefiniteStream(100)).toBe(0);
});

test('Con 101% de daño el flujo máximo indefinido es -1\n', () => {
  expect(calculateMaximumIndefiniteStream(101)).toBe(0);
});

test('Con -1% de daño el flujo máximo indefinido es -1\n', () => {
  expect(calculateMaximumIndefiniteStream(-1)).toBe(0);
});
