// Définition de la classe Voiture
class Voiture {
  // Constructeur (propriétés)
  constructor( nbRoue ,nbPedale) {
    this.nombreRoue = nbRoue;
    this.volant = typeVolant;
    this.nombrePedale = nbPedale;
    this.boiteVitesse = typrBoiteVitesse;
    this.couleur = couleur;
    this.nombrePortes = nombrePortes;
    this.nombreSieges = nombreSieges;
    this.demarre = false;
  }

  // Méthodes de la classe
  demarrer() {
    this.demarre = true;
    console.log("La voiture démarre ");
  }

  arreter() {
    this.demarre = false;
    console.log("La voiture est arrêtée ");
  }

  klaxonner() {
    console.log("Bip bip ");
  }

  allumerFeux() {
    console.log("Les feux sont allumés ");
  }

  essuyerGlace() {
    console.log("Les essuie-glaces fonctionnent ");
  }
}

// Création des exemplaires (objets)
const voiture1 = new Voiture("grise", 5, 5);
const voiture2 = new Voiture("marron", 3, 4);
const voiture3 = new Voiture("orange", 5, 5);

// Utilisation des méthodes
voiture1.demarrer();
voiture1.klaxonner();
voiture1.allumerFeux();
voiture1.arreter();2





