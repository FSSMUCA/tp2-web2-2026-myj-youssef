let tablePaires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0],
];

let resTwoEqual, resThreeZEqual;
let i,
  nbrdifferent = 0;
let first, second;

for (i = 0; i < tablePaires.length; i++) {
  first = tablePaires[i][0];
  second = tablePaires[i][1];

  resTwoEqual = first == second;
  resThreeZEqual = first === second;

  nbrdifferent =
    resTwoEqual == true && resThreeZEqual == false
      ? nbrdifferent + 1
      : nbrdifferent;
  if (first === undefined || second === undefined) {
    first = String(first);
    second = String(second);
  }
  console.log(
    JSON.stringify(first) +
      " == " +
      JSON.stringify(second).padEnd(20, " ") +
      "-> " +
      resTwoEqual +
      "".padEnd(4) +
      "|    " +
      JSON.stringify(first) +
      " === " +
      JSON.stringify(second).padEnd(20, " ") +
      "-> " +
      resThreeZEqual,
  );
}

console.log(
  nbrdifferent + " paire(s) " + "où == et === donnent des résultats différents",
);
