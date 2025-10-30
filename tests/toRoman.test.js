const { toRoman } = require('../src/toRoman');

describe('toRoman', () => {
  // GREEN TESTS
  it('Should return I when input is 1', () => {
    expect(toRoman(1)).toBe('I');
  });
  it('Should return II when input is 2', () => {
    expect(toRoman(2)).toBe('II');
  });
  it('Should return III when input is 3', () => {
    expect(toRoman(3)).toBe('III');
  });
});
