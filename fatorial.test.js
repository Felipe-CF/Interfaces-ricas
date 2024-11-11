const fatorial = require('./fatorial');

test('fatorial de 5', () => {
  expect(fatorial(5)).toBe(120);
});

test('fatorial de 0', () => {
  expect(fatorial(0)).toBe(0);
});

test('fatorial de 1', () => {
  expect(fatorial(1)).toBe(1);
});

test('fatorial de -1', () => {
  expect(fatorial(-1)).toBe("nao fatorial");
});