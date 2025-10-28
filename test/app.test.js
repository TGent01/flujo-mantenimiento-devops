const suma = require('../src/app');

test('suma correcta', () => {
  expect(suma(2, 3)).toBe(5);
});