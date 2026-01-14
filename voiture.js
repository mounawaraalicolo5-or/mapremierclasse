// Classe représentant une voiture avec ses propriétés et ses méthodes
class Voiture {
    // Constructeur: initialise les propriétés de la voiture
    constructor(nombrePortes, nombreSieges, couleur, roues, volant, pedale, boiteVitesse) {
        this.roues = roues; // Nombre de roues
        this.volant = volant; // Présence d'un volant
        this.pedale = pedale; // Présence de pédales
        this.boiteVitesse = boiteVitesse; // Type de boîte (Manuelle, Automatique)
        this.couleur = couleur; // Couleur de la voiture
        this.nombrePortes = nombrePortes; // Nombre de portes
        this.nombreSieges = nombreSieges; // Nombre de sièges
        this.estDemarree = false; // État de la voiture (démarrée ou non)
        this.feuxAllumes = false; // État des feux (allumés ou éteints)
    }
    
    // Méthode pour démarrer la voiture
    // Vérifie si elle n'est pas déjà démarrée avant de la démarrer
    demarrer() {
        if (!this.estDemarree) {
            this.estDemarree = true;
            console.log("La voiture a démarré");
        } else {
            console.log("La voiture est déjà démarrée");
        }
    }
    
    // Méthode pour arrêter la voiture
    // Vérifie si elle est démarrée avant de l'arrêter
    arreter() {
        if (this.estDemarree) {
            this.estDemarree = false;
            console.log("La voiture s'est arrêtée");
        } else {
            console.log("La voiture est déjà arrêtée");
        }
    }
    
    // Méthode pour actionner le klaxon
    // Affiche un message avec le nombre de roues
    klaxonner() {
        console.log("Bip bip! (Voiture avec " + this.roues + " roues)");
    }
    
    // Méthode pour allumer/éteindre les feux
    // Bascule l'état des feux (inverse l'état actuel)
    allumerFeux() {
        this.feuxAllumes = !this.feuxAllumes;
        console.log("Les feux sont " + (this.feuxAllumes ? "allumés" : "éteints"));
    }
    
    // Méthode pour actionner les essuie-glaces
    essuyerGlace() {
        console.log("Les essuie-glaces fonctionnent");
    }
}

// Création d'une instance de la classe Voiture
// Paramètres: 4 portes, 5 sièges, couleur rouge, 4 roues, avec volant et pédales, boîte automatique
let maVoiture = new Voiture(4, 5, "Rouge", 4, true, true, "Automatique");

// Tests des méthodes de la voiture
maVoiture.demarrer(); // Démarre la voiture
maVoiture.klaxonner(); // Fait sonner le klaxon
maVoiture.allumerFeux(); // Allume les feux
maVoiture.essuyerGlace(); // Active les essuie-glaces
maVoiture.arreter(); // Arrête la voiture