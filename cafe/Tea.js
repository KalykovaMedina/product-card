import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }
  prepare() {
    console.log("Завариваем чай...");
  }
}
