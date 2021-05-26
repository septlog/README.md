// let ok = () => {
//   if (true) {
//     console.log(this);
//     function getValue() {
//       return 1;
//     }
//     console.log(getValue());
//   }
// };
// ok();
// console.log(this);
// console.log(getValue());

let aa = {
  aaa() {
    function add() {
      console.log(this);
      this.a = 1;
      console.log(this.a);
    }

    add();
    console.log(this.a);
  }
};
aa.aaa();
