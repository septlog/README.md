let arr = [1, 2, 3, 4, { name: 'a' }];
console.log(arr); // ! [1, 2, 3, 4, 5]
console.log(...arr); // ! 1, 2, 3, 4, 5

let arr2 = [];
arr2.push(arr);
console.log(arr2); // ! 二维数组

let arr3 = [];
arr3.push(...arr);
console.log(arr3); // ! 一维数组

let arr4 = [...arr]; // ! 复制数组
console.log(arr4);

arr[4] = 'b';
console.log(arr4[4]);

console.log([...'hello']); // ! ["h", "e", "l", "l", "o"]
