let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
let i, truthy;
for (i=0; i<valeurs.length; i++) {

    if (valeurs[i]) {
        truthy="truthy";
    }
    else {
        truthy="falsy";
    }

    if (valeurs[i]==="") {
        console.log(`(chaine vide) -> ${truthy}`);
    }
    else {
        console.log(`${String(valeurs[i])} -> ${truthy}`);
    }

}