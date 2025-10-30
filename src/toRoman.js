const romanNumerals = [
  { value: 9, symbol: 'IX' },
  { value: 8, symbol: 'VIII' },
  { value: 7, symbol: 'VII' },
  { value: 6, symbol: 'VI' },
  { value: 4, symbol: 'IV' },
  { value: 3, symbol: 'III' },
  { value: 2, symbol: 'II' },
  { value: 1, symbol: 'I' },
];

function toRoman(n) {
  const match = romanNumerals.find(item => item.value === n);
  if (match) return match.symbol;
  throw new Error('Invalid');
}

module.exports = {toRoman};
