import { Drink } from "./Drink.js";
export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getInfo() {
    return {
      name: this.name,
      location: this.location,
    };
  }
  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      throw new Error("Это не напиток!");
    }
    console.log("Новый заказ!");
    drink.serve();
  }
}
