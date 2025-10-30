const romanNumerals = [
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' }, // 100 - 10
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' }, // 50 - 10
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },  // 10 - 1
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },  // 5 - 1
  { value: 1, symbol: 'I' }
];

function toRoman(n) {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    throw new Error('Invalid');
  }
  let result = '';
  let rest = n;
  for (let i = 0; i < romanNumerals.length; i++) {
    const { value, symbol } = romanNumerals[i];
    while (rest >= value) {
      result += symbol;
      rest -= value;
    }
  }
  if (rest !== 0) throw new Error('Invalid'); 
  return result;
}

module.exports = {toRoman};
