let set = new Set();
set.add(5);
set.add('5');
console.log(set.size);
console.log(set);
console.log('---------------------------');
let set2 = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(set2.size);
console.log(set2.has(1));
set2.delete(5);
console.log(set2);
console.log('---------------------------');
set2.forEach((v) => {
  console.log(v);
});

console.log('---------------------------');
let arr = [...set2];
console.log(arr);
