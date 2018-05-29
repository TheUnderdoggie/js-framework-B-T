document.addEventListener("DOMContentLoaded", function(event) {

  // Functie voor het aanpassen van het lettertype wanneer de pagina geladen is.
  function WijzigLettertype(){
    document.body.style.fontFamily = stemspecs.lettertype;
  }

  WijzigLettertype();
});

// Variabelen uit var.js inladen
var stemspecs = new stemvariabel();

// Stem module
var stemmodule = (function() {

  // Variabel aanmaken met het aantal stemmen
  var stemmen = stemspecs.stemmen;

  // Functie om elke keer nadat er geklikt wordt een stem toe te voegen aan het variabel.
  function stem() {
    stemmen += 1;
    updateStemmen();
  }

  // Functie voor het bijwerken van het aantal stemmen.
  function updateStemmen() {
    document.getElementById('stemmen').innerHTML = stemmen;
    document.getElementById('dag').innerHTML = stemspecs.weekdag;
  }

  // Initialiseren van het aantal huidigen stemmen en het uitvoeren van de functie wanneer er op de knop geklikt wordt.
  var init = function() {
    console.log('init');
    document.getElementById('stem').addEventListener('click', stem);

    updateStemmen();
  };

  return {
    init: init
  }

})();

stemmodule.init();
