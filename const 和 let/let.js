function getValue(condition) {
  if (condition) {
    let value = 'blue';
    return value;
  } else {
    return null;
  }
}

// ? ====================================================================================================
var functions = [];
for (let i = 0; i < 10; i++) {
  functions.push(function () {
    console.log(i); // ! 每次循环都会创建一个新的变量。
  });
}

functions.forEach((func) => {
  func(); // ! 输出 0，1，2，3 ... 9。
});
