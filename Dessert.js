export class Dessert {
  constructor(name, filling) {
    this.name = name;
    this.filling = filling;
  }
  getInfo() {
    console.log(`${this.name}, ${this.filling}`);
  }
}

export class CreamyDessert extends Dessert {
  constructor(name, filling, texture) {
    super(name, filling);
    this.texture = texture;
  }

  showDessert() {
    console.log(`${this.name}, ${this.filling} ${this.texture}`);
    super.getInfo();
  }
}
