let stu = { name: 'hello', age: 100 };
let { name, age } = stu;
console.log(name);
console.log(age);

let apples = ['apple1', 'apple2', 'apple3', 'apple4'];
let [apple1, apple2, apple3, apple4] = apples;
console.log(apple1);
console.log(apple2);
console.log(apple3);
console.log(apple4);
console.log('-----------------------------------------------');

let [, , , apple4th] = apples;
console.log(apple4th);
console.log('-----------------------------------------------');
let colors = ['red', ['green', 'lightgreen'], 'blue'];
let [firstColor, [secondColor]] = colors;
console.log(firstColor);
console.log(secondColor);

console.log('-----------------------------------------------');
let restColors;
[firstColor, ...restColors] = colors;
console.log(restColors);
console.log('-----------------------------------------------');
