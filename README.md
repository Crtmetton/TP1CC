## Langage choisi
JavaScript

## Exécution des tests
Pour exécuter les tests, utilisez la commande suivante :
```bash
npx jest
```

ou

```bash
npm test
```

## Approche
L'implémentation utilise un tableau de correspondances ordonné par valeurs décroissantes, incluant les chiffres soustractifs (CM, CD, XC, XL, IX, IV). Pour chaque valeur, la fonction soustrait autant de fois que possible et concatène le symbole romain correspondant. La validation vérifie que l'entrée est un entier strictement positif inférieur à 4000, et lance une erreur sinon. Cette approche garantit une conversion correcte pour tous les nombres de 1 à 3999.
