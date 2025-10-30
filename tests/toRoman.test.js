const { toRoman } = require('../src/toRoman');

describe('toRoman', () => {
  //@GREEN TESTS
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
  it('Should return VI when input is 6', () => {
    expect(toRoman(6)).toBe('VI');
  });
  it('Should return VII when input is 7', () => {
    expect(toRoman(7)).toBe('VII');
  });
  it('Should return VIII when input is 8', () => {
    expect(toRoman(8)).toBe('VIII');
  });
  it('Should return XL when input is 40', () => {
    expect(toRoman(40)).toBe('XL');
  });
  it('Should return MCMXCIV when input is 1994', () => {
    expect(toRoman(1994)).toBe('MCMXCIV');
  });
  it('Should return MMMCMXCIX when input is 3999', () => {
    expect(toRoman(3999)).toBe('MMMCMXCIX');
  });

  //@RED TESTS
  it('Should throw error when input is 0', () => {
    expect(() => toRoman(0)).toThrow('Invalid');
  });

  it('Should throw error when input is negative', () => {
    expect(() => toRoman(-1)).toThrow('Invalid');
  });

  it('Should throw error when input is a decimal number', () => {
    expect(() => toRoman(3.5)).toThrow('Invalid');
  });

  it('Should throw error when input is a string', () => {
    expect(() => toRoman('5')).toThrow('Invalid');
  });

  it('Should throw error when input is undefined', () => {
    expect(() => toRoman(undefined)).toThrow('Invalid');
  });

  it('Should throw error when input is null', () => {
    expect(() => toRoman(null)).toThrow('Invalid');
  });
});
