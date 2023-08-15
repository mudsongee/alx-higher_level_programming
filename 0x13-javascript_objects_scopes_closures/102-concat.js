#!/usr/bin/node

const fs = require('fs').promises;
const { argv } = require('process');

fs.readFile(argv[2], 'utf8')
  .then(data1 => {
    fs.readFile(argv[3], 'utf8')
      .then(data2 => {
        const concatenatedData = data1 + data2;
        return fs.writeFile(argv[4], concatenatedData, 'utf8');
      })
      .catch(err => console.error('Error reading/writing second file:', err));
  })
  .catch(err => console.error('Error reading first file:', err));
