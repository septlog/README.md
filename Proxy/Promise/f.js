const fs = require('fs');
fs.readFile('./p.js', (err, data) => {
  if (err) {
    throw err;
  }
  fs.writeFile('./d.js', (err) => {
    if (err) {
      throw err;
    }
    console.log('file was written');
  });
});

let promise = fs.readFile('./p.js');
promise.then(
  (content) => {
    console.log(content);
  },
  (err) => {
    console.log(err);
  }
);
