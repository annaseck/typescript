// Implémenter une classe nommée Voiture qui implémente l'interface Véhicule. La classe Car doit avoir :
// Un constructeur qui initialise les propriétés make, model, et year.
// Implémenter la méthode start pour enregistrer "Car engine started" sur la console.
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log('Car engine started');
    };
    return Voiture;
}());
//Créer une instance de la classe Car et l'initialiser avec quelques valeurs pour make, model, et year.
var maVoiture = new Voiture("Toyota", "Corolla", 2020);
//Appellez la méthode start sur l'instance de la classe Car pour vérifier qu'elle 
//enregistre le message approprié dans la console.
maVoiture.start();
