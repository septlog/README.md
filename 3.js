let rabbits = [];
let month = 0;
class Rabbit {
  age = 0;
  create() {
    this.age++;
    if (this.age > 2) {
      rabbits.push(new Rabbit());
    }
  }
}

rabbits.push(new Rabbit());
rabbits.push(new Rabbit());

setInterval(() => {
  let ok = 0;
  rabbits.forEach((rabbit) => {
    rabbit.create();
    if (rabbit.age > 2) {
      ok++;
    }
  });
  month++;
  console.log(`第${month}个月：${rabbits.length}只兔子，其中${ok}`);
}, 1000);
