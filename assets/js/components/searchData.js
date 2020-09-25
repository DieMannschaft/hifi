$(document).ready(function() {
  /* $.ajaxSetup({
     cache: false
   });*/
  //en funktion der kædes sammen med et tryk på en tasturknap
  $('#search').keyup(function() {
    //clearer resultatet
    $('#result').html('');
    //får værdien fra søgefeltet og gemmer det i variablen(searchField)
    var searchField = $('#search').val();
    //regular expression som gemmes i en variable
    var expression = new RegExp(searchField, "i");
    //Ajax request for at få JSON data
    $.getJSON('assets/data/searchData.json', function(data) {
      //resultatet af requesten
      //data får vi fra JSON
      $.each(data, function(key, value) {
        //søge betingelser
        if (value.name.search(expression) != -1 || value.manufacturer.search(expression) != -1 || value.price.search(expression) != -1) {
          //Hvad der vises som søgefeltet's resultat
          $('#result').append('<li class="list-group-item"><img src="' + value.image + '" height="40" width="40" class="img-thumbnail" /> ' + value.name + ' ' + value.price + ' | <span class="text-muted">' + value.manufacturer + '</span></li>');
        }
      });
    });
  });
  // trykker på navnet og det åbner i nyt vindue
  $('#result').on('click', 'li', function() {
    $("#result").html('');
    window.open('singleProduct__page.html', '_blank');
    $(window).on('click', function() {
      $("#result").hide;
    });
  });

});