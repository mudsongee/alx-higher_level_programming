const fs = require('fs');

// Check if the correct number of command-line arguments is provided
if (process.argv.length !== 3) {
  console.log('Usage: node script.js <file_path>');
  process.exit(1);
}

const filePath = process.argv[2];

// Read the file in utf-8 encoding
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

