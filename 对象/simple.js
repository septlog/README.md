let hello = 'hello';
let world = 'world';
let obj = {
  hello,
  world,
  sayHello() {
    console.log(hello);
  }
};

obj.sayHello();
