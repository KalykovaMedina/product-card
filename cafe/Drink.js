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
  #prepare() {
    console.log("Напиток готовится...");
    if (this.name === "Капучино") {
      this.setTemperature(65);
    } else if (this.name === "Зелёный чай") {
      this.setTemperature(75);
    } else if (this.name === "Клубничный лимонад") {
      this.setTemperature(5);
    }
  }
  serve() {
    this.#prepare();
    console.log("Напиток подан!");
  }
}
