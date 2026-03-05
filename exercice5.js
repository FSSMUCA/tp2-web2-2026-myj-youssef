let nombres = [
  0,
  NaN,
  Infinity,
  -Infinity,
  42,
  3.14,
  Number.MAX_SAFE_INTEGER + 1,
  -0,
];

let i;
let type;
for (i = 0; i < nombres.length; i++) {
  if (Number.isNaN(nombres[i])) {
    type = "INVALIDE";
  } else if (nombres[i] === Infinity || nombres[i] === -Infinity) {
    type = "INFINI";
  } else if (2 / nombres[i] === -Infinity) {
    type = "ZERO NEGATIF";
  } else if (Number.isInteger(nombres[i])) {
    type =
      nombres[i] >= Number.MAX_SAFE_INTEGER
        ? (type = "ENTIER HORS LIMITES")
        : (type = "ENTIER SUR");
  } else {
    type = "DECIMAL";
  }

  console.log(nombres[i], "->", type);
}
