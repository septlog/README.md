const fs = require('fs');
for (let i = 0; i < 100000000000; i++) {
  fs.writeFile('./ok', 'data', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('nice');
  });
}
