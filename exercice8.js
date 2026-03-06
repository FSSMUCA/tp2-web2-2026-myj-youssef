let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let messageNom,
  messageAge,
  messageEmail,
  messageScoreJeu,
  messageEstAdmin,
  messageDerniereConnexion,
  messageNombreConnexions;

nom = nom.trim();
messageNom =
  nom !== ""
    ? JSON.stringify(nom) + " (corrigé : espaces supprimés)"
    : "Inconnu";

age = Number(age);
messageAge =
  Number.isNaN(Number(age)) || Number(age) <= 0
    ? "valeur invalide"
    : age + " (valide)";

if (email.indexOf("@") != -1) {
  if (email.indexOf(".", email.indexOf("@")) != -1) {
    messageEmail = JSON.stringify(email) + " (valide)";
  } else {
    messageEmail = JSON.stringify(email) + " (invalide : pas de @)";
  }
} else {
  messageEmail = JSON.stringify(email) + " (invalide : pas de point après @)";
}

let scoreJeuCopie = scoreJeu;
scoreJeu = Number.isNaN(parseInt(scoreJeu)) ? 0 : parseInt(scoreJeu);
messageScoreJeu = Number.isNaN(parseInt(scoreJeu))
  ? "score invalide"
  : scoreJeu + " (extrait depuis " + JSON.stringify(scoreJeuCopie) + ")";

estAdmin = estAdmin === "true";
messageEstAdmin = estAdmin;

messageDerniereConnexion = derniereConnexion ?? "Jamais connecté";

nombreConnexions = Number(nombreConnexions);
messageNombreConnexions =
  nombreConnexions === 0 ? "Aucune connexion" : nombreConnexions;

console.log("===== RAPPORT UTILISATEUR =====");
console.log("nom".padEnd(17) + ":  " + messageNom);
console.log("age".padEnd(17) + ":  " + messageAge);
console.log("email".padEnd(17) + ":  " + messageEmail);
console.log("scoreJeu".padEnd(17) + ":  " + messageScoreJeu);
console.log("estAdmin".padEnd(17) + ":  " + messageEstAdmin);
console.log("derniereConnexion".padEnd(17) + ":  " + messageDerniereConnexion);
console.log("nombreConnexions".padEnd(17) + ":  " + messageNombreConnexions);
console.log("================================");
