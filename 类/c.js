class Person {
  constructor() {
    (this.name = 'hello'), (this.age = 100);
  }
  constructor(a) {
    console.log('a');
  }
  // ! sayName 是 Person.prototype 上的一个方法。
  sayName() {
    console.log(this.name);
  }
}

let person = new Person();
person.sayName();
