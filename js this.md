# js this

<a name="code1"></a>

```js
var a = 2;

function foo() {
    var a = 22;
    this.bar();
}

function bar() {
    console.log(this.a); // 2
}
foo();
```

this只跟函数的调用位置有关，是在函数被调用时发生绑定的。

this 有四种绑定规则，分别是：默认绑定、隐式绑定、显示绑定以及new绑定。

## 默认绑定

见[代码片段 1](#code1)。

## 隐式绑定

<a name="code2"></a>

```js
var a = 2;

function foo() {
    console.log(this.a);
}
let obj = {
    a: 100,
    foo
};
obj.foo(); // 100
```

**隐式绑定**需要注意绑定对象的丢失。

* 第一种是函数的引用赋值给了变量。

```js
var a = 2;

function foo() {
    console.log(this.a);
}
let obj = {
    a: 100,
    foo
};
obj.foo(); // 100
let bar = obj.foo;
bar(); // 2
```

* 第二种是函数作为参数传入回调函数

```js
var a = 2;

function foo() {
    console.log(this.a);
}
let obj = {
    a: 100,
    foo
};
obj.foo(); // 100
setTimeout(() => {
    obj.foo(); // 100
}, 100);
```
