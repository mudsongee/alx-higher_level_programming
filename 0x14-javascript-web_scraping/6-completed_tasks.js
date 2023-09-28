#!/usr/bin/node
// computes the number of tasks completed by user id.

const request = require('request');
const address = process.argv[2];

request(address, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    let results = {};
    for (let td of JSON.parse(body)) {
      if (td.completed) {
        if (results[td['userId']] === undefined) { results[td['userId']] = 0; }
        results[td['userId']] += 1;
      }
    }
    console.log(results);
  }
});
