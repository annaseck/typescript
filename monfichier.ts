//Définissez une interface nommée Véhicule avec les propriétés suivantes
// make de type string
// model de type string
// year de type number
// méthodestart qui renvoie void et enregistre "Engine started" sur la console.
interface Vehicule {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implémenter une classe nommée Voiture qui implémente l'interface Véhicule. La classe Car doit avoir :
// Un constructeur qui initialise les propriétés make, model, et year.
// Implémenter la méthode start pour enregistrer "Car engine started" sur la console.
class VoitureUnique implements Vehicule {
    make: string;
    model: string;
    year: number;
    
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log('Car engine started');
    }
}

//Créer une instance de la classe Car et l'initialiser avec quelques valeurs pour make, model, et year.
const maVoiture = new VoitureUnique("Toyota", "Corolla", 2020);
//Appellez la méthode start sur l'instance de la classe Car pour vérifier qu'elle 
//enregistre le message approprié dans la console.
maVoiture.start(); 
