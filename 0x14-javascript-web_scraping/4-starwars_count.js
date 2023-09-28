#!/usr/bin/node
const request = require('request');
const address = process.argv[2];

request(address, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let results = JSON.parse(body).results;
    let count = 0;
    for (let i in results) {
      for (let chr of results[i].characters) {
        if (chr.search('/18/') > 0) { count += 1; }
      }
    }
    console.log(count);
  }
});

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
    } else {
      console.log('Failed to fetch movie data from the API.');
    }
  }
});
