function getValue() {
  return 1;
}
function add(first, second = getValue()) {
  return first + second;
}
console.log(add(1, 10)); // ! 2

function add2(first, second = first) {
  return first + second;
}
console.log(add2(10)); // ! 2
