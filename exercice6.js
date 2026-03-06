let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let tableVar = [
  ["nom", nom],
  ["age", age],
  ["ville", ville],
  ["score", score],
  ["actif", actif],
];

// ¨Partie A :
console.log("L' opérateur ?? (nullish coalescing operator)");
let i, testNullish, testOr;
for (i = 0; i < tableVar.length; i++) {
  testNullish = tableVar[i][1] ?? "valeur par défaut";
  if (testNullish !== "valeur par défaut") {
    testNullish =
      typeof testNullish === "string" ? JSON.stringify(testNullish) : testNullish;
  }

  console.log(
    tableVar[i][0].padEnd(6) +
      "?? " +
      JSON.stringify("valeur par défaut") +
      "    -> " +
      testNullish,
  );
}

// Partie B :
console.log("\nL'opérateur || le OU logique (Logical OR)");
for (i = 0; i < tableVar.length; i++) {
  testOr = tableVar[i][1] || "valeur par défaut";
  if (testOr !== "valeur par défaut") {
    testOr =
      typeof testOr === "string" ? JSON.stringify(testOr) : testOr;
  }

  console.log(
    tableVar[i][0].padEnd(6) +
      "|| " +
      JSON.stringify("valeur par défaut") +
      "    -> " +
      testOr,
  );
}

// Partie C :
console.log("\nLa comparaison de résultats");
for (i=0; i < tableVar.length; i++) {
  testNullish = tableVar[i][1] ?? "valeur par défaut";
  testOr = tableVar[i][1] || "valeur par défaut";

  if (testNullish === testOr) {
    console.log(tableVar[i][0].padEnd(6) + ": ?? et || -> " + "même résultat");
  }
  else {
    console.log(tableVar[i][0].padEnd(6) + ": ?? et || -> " + "résultat différent");
  }
}

