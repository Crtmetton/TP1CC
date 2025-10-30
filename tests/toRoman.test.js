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
  it('Should return IV when input is 4', () => {
    expect(toRoman(4)).toBe('IV');
  });
  it('Should return IX when input is 9', () => {
    expect(toRoman(9)).toBe('IX');
  });
});
