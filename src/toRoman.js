const romanNumerals = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' }, // 1000 - 100
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' }, // 500 - 100
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

// Fonction pour convertir n'importe quel nombre de 1 à 3999 en chiffre romain
function toRoman(n) {
  // On vérifie que le nombre est un entier valide dans l'intervalle accepté
  if (
    typeof n !== 'number' ||
    n <= 0 ||
    n >= 4000 ||
    !Number.isInteger(n)
  ) {
    throw new Error('Invalid');
  }
  let result = '';
  let rest = n;
  // Pour chaque valeur du tableau, du plus grand au plus petit
  for (let i = 0; i < romanNumerals.length; i++) {
    const { value, symbol } = romanNumerals[i];
    while (rest >= value) {
      result += symbol;
      rest -= value;
    }
  }
  // À la fin, rest doit être 0 si tout s'est bien passé
  if (rest !== 0) throw new Error('Invalid'); 
  return result;
}

module.exports = {toRoman};
