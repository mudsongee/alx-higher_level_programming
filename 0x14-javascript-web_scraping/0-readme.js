#!/usr/bin/node

let file = process.argv[2];
let fs = require('fs');
fs.readFile(file, 'utf8', function (err, data = err) {
  if (err) {
	  console.error(err);
  } else {
	console.log(data);
  }
});
