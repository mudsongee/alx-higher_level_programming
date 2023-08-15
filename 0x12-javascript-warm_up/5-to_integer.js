#!/usr/bin/node
const args = process.argv[2];
const parsedInteger = parsedInt(args);

if (isNaN(parsedInteger)) {
  console.log('Not a number');
} else {
  console.log('My number: $parseInt(parsedInteger)');
}
