// const apple = 'apple';
// apple = 'orange'; // !TypeError: Assignment to constant variable.

const stu = {
  name: '小明',
  age: '100'
};
// * const 声明是对象，对象中的值可以修改
stu.age = '200';
console.log(stu); // * { name: '小明', age: '200' }
