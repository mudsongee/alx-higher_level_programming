$(document).ready(function () {
  $.ajax({
    url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
    method: 'GET',
    success: function (data) {
      $.each(data.results, function (index, movie) {
        $('UL#list_movies').append($('<li>').text(movie.title));
      });
    },
    error: function () {
      $('UL#list_movies').append($('<li>').text('Error fetching movie data'));
    }
  });
});
