let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('ok');
    } else {
      reject('not ok');
    }
  }, 2000);
});

p.then((message) => {
  console.log(message);
}).catch((err) => {
  console.err(err);
});
