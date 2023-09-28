#!/usr/bin/node
// gets the contents of a webpage and stores it in a file

const request = require('request');
const address = process.argv[2];

request(address, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const fs = require('fs');
    fs.writeFile(process.argv[3], body, function (err) {
      if (err) { console.error(err); }
    });
  }
});
