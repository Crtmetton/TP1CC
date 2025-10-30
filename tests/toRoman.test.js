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

  //@RED TESTS
  it('Should throw error when input is 0', () => {
    expect(() => toRoman(0)).toThrow('Invalid');
  });

  it('Should throw error when input is negative', () => {
    expect(() => toRoman(-1)).toThrow('Invalid');
  });

  it('Should throw error when input is greater than 9', () => {
    expect(() => toRoman(10)).toThrow('Invalid');
  });

  it('Should throw error when input is 100', () => {
    expect(() => toRoman(100)).toThrow('Invalid');
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
