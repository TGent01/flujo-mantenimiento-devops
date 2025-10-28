const suma = require('../src/app');

test('suma correcta', () => {
  expect(suma(2, 3)).toBe(5);
});

test('retorna 0 si los parámetros no son números', () => {
  expect(suma("a", 2)).toBe(0);
});