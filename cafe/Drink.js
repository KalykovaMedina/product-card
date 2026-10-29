export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать обычный напиток");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getTemperature() {
    return this.#temperature;
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }
  getInfo() {
    return {
      name: this.name,
      size: this.size,
      price: this.price,
      temperature: this.#temperature,
    };
  }
  prepare() {
    console.log("Напиток готовится...");
  }
  serve() {
    this.prepare();
    console.log("Напиток подан!");
  }
}
