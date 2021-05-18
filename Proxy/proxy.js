let proxy = new Proxy(
  {},
  {
    get() {
      return 35;
    }
  }
);
console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);

let proxy2 = new Proxy(
  { name: 'hello' },
  {
    get(target, propKey) {
      if (propKey in target) {
        return target[propKey];
      } else {
        throw new ReferenceError();
      }
    }
  }
);

console.log(proxy2.name);
console.log(proxy2.title);
