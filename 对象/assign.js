let ok = { well: 'ok' };
let stu = { name: 'hello', age: 100, ok };
let stuCopy = {};
Object.assign(stuCopy, stu);
console.log(stuCopy);
console.log(stu == stuCopy);
stu.ok.well = 'not ok';
console.log(stuCopy.ok.well);
