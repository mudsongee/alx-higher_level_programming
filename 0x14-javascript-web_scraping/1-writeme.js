#!/usr/bin/node
// reads and prints the content of a file.

const fs = require('fs');
const file = process.argv[2];
const string = process.argv[3];
const fs = require('fs');

fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File has been written successfully.');
  }
});
