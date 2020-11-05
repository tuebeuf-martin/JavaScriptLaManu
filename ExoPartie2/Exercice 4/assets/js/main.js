// Création des variables contenant les éléments à manipuler afin de nous empêcher d'avoir à tout retaper à chaque fois.
var appearFirst = document.getElementById('appearFirst');
var appearSecond = document.getElementById('appearSecond');
var appearThird = document.getElementById('appearThird');
// Création d'un tableau contenant toutes les variables ci-dessus pour faciliter leur utilisation future.
var appearTable = [appearFirst, appearSecond, appearThird];
var disappearTable = [appearThird, appearSecond ,appearFirst]
// Pour chaque élément du tableau, je définis l'opacité à 0 au chargement de la page afin que mes éléments soient tous invisibles.
appearTable.forEach(element => {
    element.style.opacity = 0;
});
//Ici, listener est un activateur, "Quand un scroll est effectué, effectue..."
window.addEventListener("scroll",function() {//Cette fonction va s'executer quand on scroll//

    var scrollValue = window.scrollY;
    console.log(scrollValue);

    if (scrollValue>500) {//Si la valeur du scroll est

        appearTable.forEach(element => {

            element.style.opacity = 1;
        });

        appearFirst.style.transition="opacity 1s";
        appearSecond.style.transition="opacity 1s 0.5s";
        appearThird.style.transition="opacity 1s 1s";
    }
    else {
        disappearTable.forEach(element => {

            element.style.opacity = 0;
        });

        appearThird.style.transition="opacity 1s";
        appearSecond.style.transition="opacity 1s 0.5s";
        appearFirst.style.transition="opacity 1s 1s";

    }

})