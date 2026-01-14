// j'apprends a crée des classes en javascript

/** 
* comment declarer une classe ?
*pour declarer
*1.je commence par le mot clés class
*2.je donne un nom a la classe . le nom de la classe doit commencer par une lettre majuscule
*3.je definis les proprietes et les methodes de la classe
*/

//ma classe personne 
class Personne{

    constructor(nomPersonne, villagePersonne, anneNaissance){

        //le propriete d'une personne sont : nom, village, année de naissance
        this.nom = nomPersonne;
        this.village = villagePersonne;
        this.annee = anneNaissance;

    }

    //Méthode
    bienvenue(){
        alert("Bienvenue " + this.nom);

    }

    calculAge(){
        let anneCourante = new Date().getFullYear();
        return anneCourante - this.nom
    }

age(){
    alert("vous avez " + this.calculAge()+" ans");

}

}


//j'utulise la classe personne pour crée une instance  (exemplaire) de personne  . notre personne s'appelle Ali il habite a combani . il est née le 1999

let personne1 = new Personne("Ali", "Combani",1999);

//je faist
personne1.bienvenue();
console.log(personne1);

personne1.age();


let personne2 =new Personne ("Fatima", "Chiconi",2014);
console.log(personne2);
personne2.age();

console.log("personne2 : ", personne2)


