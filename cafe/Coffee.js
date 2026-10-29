import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, temperature, coffeeType) {
    super(name, size, price, temperature);
    this.coffeeType = coffeeType;
  }
  prepare() {
    console.log("Готовим кофе...");
  }
}
