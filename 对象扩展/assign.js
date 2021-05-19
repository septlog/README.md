// ! Object.assign 接受任意数量的源对象，并按指定的顺序将属性复制到接收对象中
// ! 如果多个源对象具有相同的属性，靠后的源对象会覆盖靠前的
let person = {
  name: 'hello',
  age: 100
};
let personClone = Object.assign({}, person);
console.log(personClone);

let person2 = { name: 'world', age: 200, apple: 'apple' };

let personClone2 = Object.assign({}, person, person2);
console.log(personClone2);
// ! Object.assign 不能复制访问器属性

let person3 = {
  name: 'hello',
  get n() {
    return this.name;
  }
};
let personClone3 = Object.assign({}, person3);
let personDescriptor = Object.getOwnPropertyDescriptor(person3, 'name');
let descriptor = Object.getOwnPropertyDescriptor(personClone3, 'name');
// console.log(descriptor.value);
// console.log(descriptor.get);
console.log(descriptor.get);
console.log(personDescriptor);
// ! Object.assign()方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
const obj1 = { a: { b: 1 } };
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
