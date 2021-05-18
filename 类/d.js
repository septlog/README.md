class CustomHtmlElement {
  constructor(element) {
    this.element = element;
  }
  get html() {
    return this.element.innerHTML;
  }
  set html(value) {
    this.element.innerHTML = value;
  }
}
let descriptor = Object.getOwnPropertyDescriptor(
  CustomHtmlElement.prototype,
  'html'
);
console.log(descriptor);
