#!/usr/bin/node
// prints the number of movies where the character “Wedge Antilles” is present

const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18; // Character ID for Wedge Antilles

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const filmsData = JSON.parse(body).results;
      const filmsWithWedgeAntilles = filmsData.filter((film) =>
        film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      );

      console.log(filmsWithWedgeAntilles.length);
    }
  }
});
