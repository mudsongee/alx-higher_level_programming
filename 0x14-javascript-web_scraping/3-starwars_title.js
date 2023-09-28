#!/usr/bin/node
// prints the title of a Star Wars movie where the episode number matches a given integer

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } else {
      console.log(`Movie with ID ${movieId} not found.`);
    }
  }
});
