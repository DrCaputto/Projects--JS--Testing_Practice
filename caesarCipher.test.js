const caesarCipher = require('./caesarCipher');

it('works with single letters', () => {
  expect(caesarCipher('A', 1)).toBe('B');
});

it('works with word', () => {
  expect(caesarCipher('Aaa', 1)).toBe('Bbb');
});

it('works with phrases', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

it('works with negative shift', () => {
  expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

it('works with wrap past Z', () => {
  expect(caesarCipher('Z', 6)).toBe('F');
});

it('works with shift factors over 26', () => {
  expect(caesarCipher('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});

it('works with negative shift factors over 26', () => {
  expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});