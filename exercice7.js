let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal, reduction, totalFinal, soldeEstSuffisant;

sousTotal = prix * quantite;

console.log("Sous-total : " + sousTotal.toFixed(3) + " MAD");

reduction =
  (codePromo ?? false) && estMembre === true
    ? (prix * quantite) / reductionPourcentage
    : 0;

console.log("Le montant de la réduction est : " + reduction.toFixed(3) + " MAS");

totalFinal = sousTotal - reduction;

soldeEstSuffisant = soldeCompte >= totalFinal;
if (soldeEstSuffisant) {
  console.log("Paiement accepté");
} else {
  console.log("Solde insuffisant");
}

if (soldeEstSuffisant) {
  soldeCompte -= totalFinal;
  console.log("Le nouveau solde : " + soldeCompte + " MAD");
}

// Le récapitulatif :
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit".padEnd(10) + ": " + nomProduit);
console.log("Quantité".padEnd(10) + ": " + quantite);
console.log("Prix unit.".padEnd(10) + ": " + prix + " MAD");
console.log("Sous-total".padEnd(10) + ": " + sousTotal.toFixed(3) + " MAD");
console.log("Réduction".padEnd(10) + ": " + reduction.toFixed(3) + " MAS");
console.log("Total".padEnd(10) + ": " + totalFinal.toFixed(3) + " MAS");

if (soldeEstSuffisant) {
  soldeCompte -= totalFinal;
  console.log("Status".padEnd(10) + ": " + "Paiement accepté");
} else {
  console.log("Status".padEnd(10) + ": " + "Solde insuffisant");
}

if (soldeEstSuffisant) {
  console.log("Solde".padEnd(10) + ": " + soldeCompte + " MAD");
}
console.log("=========================");
