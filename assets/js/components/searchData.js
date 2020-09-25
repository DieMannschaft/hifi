$(document).ready(function() {

  //en funktion der kædes sammen med et tryk på en tasturknap
  $('#search').keyup(function() {
    //clearer resultatet
    $('#result').html('');
    //får værdien fra søgefeltet og gemmer det i variablen(searchField)
    var searchField = $('#search').val();
    //regular expression som gemmes i en variable
    //expression modtager 'searchField' som et argument og bruger det til at tjekke søgefeltet 
    //i er en modifier som bruges til at udføre "case-insensitive matching".
    var expression = new RegExp(searchField, "i");
    //Ajax request for at få JSON data
    $.getJSON('assets/data/searchData.json', function(data) {
      //resultatet af requesten er 'data' som fås fra JSON
      //tjekker data'en vi får fra JSON en efter en via forEach
      //funktionen retunere key og value fra data
      $.each(data, function(key, value) {
        //søge betingelser
        if (value.name.search(expression) != -1 || value.manufacturer.search(expression) != -1 || value.price.search(expression) != -1) {
          //Hvad der vises som søgefeltet's resultat, hvis betingelsen er opfyldt
          //der bliver tilføjet en li til ul'en, li'en indeholder et image, name, price og manufacturer
          $('#result').append('<li class="list-group-item"><img src="' + value.image + '" height="40" width="40" class="img-thumbnail" /> ' + value.name + ' ' + value.price + ' | <span class="text-muted">' + value.manufacturer + '</span></li>');
        }
      });
    });
  });
  // trykker på søgeresultatet og den åbner produktet
  $('#result').on('click', 'li', function() {
    $("#result").html('');
    //åbner produktet i et nyt vindue (da vi ikke har en produkt side for hvert produkt)
    window.open('singleProduct__page.html', '_blank');
  });

});