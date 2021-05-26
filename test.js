var a = 2;
function foo() {
  console.log(this.a);
}
let obj = { a: 100, foo };
obj.foo(); // 100
setTimeout(() => {
  obj.foo(); // 100
}, 100);
