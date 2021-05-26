function getValue(condition) {
  // * undefined
  console.log(value);
  if (condition) {
    var value = 'blue';
    return value;
  } else {
    // * undefined
    console.log(value);
    return null;
  }
}

let result = getValue(false);

// ? ====================================================================================================
var functions = [];
for (var i = 0; i < 10; i++) {
  functions.push(function () {
    console.log(i);
  });
}

functions.forEach((func) => {
  func(); // ! 输出 10 次 10，所有函数保留了对相同变量的引用。
});
console.log(i); // ! 10，i 的作用域会被提升到当前作用域顶部。
var functions = [];
for (var i = 1; i < 10; i++) {
  functions.push(function () {
    console.log(i);
  });
}
functions.forEach((func) => {
  func(); // ! 输出 10 次 10，所有函数保留了对相同变量的引用。
});
