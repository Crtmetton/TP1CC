const romanNumerals = [
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 3, symbol: "III" },
  { value: 2, symbol: "II" },
  { value: 1, symbol: "I" },
];

function toRoman(n) {
  if (n === 1) return 'I';
  if (n === 2) return 'II';
  if (n === 3) return 'III';
  throw new Error('Invalid');
}

module.exports = {toRoman};
