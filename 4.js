let i = 1;
let end = false;
let interval = setInterval(() => {
  for (let k = 0; k < i; k++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
  if (end) {
    clearInterval(interval);
  }
}, 90);
setTimeout(() => {
  i = 3;
}, 100);

setTimeout(() => {
  i = 5;
}, 200);
setTimeout(() => {
  i = 7;
}, 300);
setTimeout(() => {
  i = 5;
}, 400);
setTimeout(() => {
  i = 3;
}, 500);
setTimeout(() => {
  i = 1;
  end = true;
}, 600);
