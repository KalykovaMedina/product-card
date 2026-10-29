import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";

import { Cafe } from "./cafe/Cafe.js";
import { Coffee } from "./cafe/Coffee.js";
import { Lemonade } from "./cafe/Lemonade.js";
import { Tea } from "./cafe/Tea.js";

import { CreamyDessert } from "./Dessert.js";
import { Modal } from "./Modal.js";
const dessert = new CreamyDessert("Наполеон", "с ягодами", "заварной ");
dessert.showDessert();

const modal = new Modal("registration-modal");
const openBtn = document.querySelector(".registration-btn");
openBtn.addEventListener("click", () => modal.open());
modal.isOpen();

import { Form } from "./Form.js";
const form = new Form("registration-form");
form.element.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.isValid()) {
    const data = form.getValues();
    if (data.password !== data["repeat-password"]) {
      console.log("Пароли не совпадают!");
      return;
    }
    console.log("Успех!", data);
    form.reset();
    modal.close();
  } else {
    form.element.reportValidity();
    console.log("Заполните все поля корректно!");
  }
});

//Покраска всех карточек
const productCards = document.querySelectorAll(".card"); //массив
const changeColorCardButton = document.querySelector("#change-all-color-btn");
const violetColorHash = "#deddef";
const blueColorHash = "#bfabdb";

changeColorCardButton.addEventListener("click", () => {
  productCards.forEach(
    (card) => (card.style.backgroundColor = violetColorHash),
  );
});

//Покраска первой карточки
const firstProductCard = document.querySelector(".card");
const changeColorFirstCardButton = document.querySelector(
  "#change-color-first-btn",
);

changeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

//Открыть google
const openGoogleButton = document.querySelector("#open-google");
openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com");
  } else {
    return;
  }
}

//Вывод консоль лога и alert
const outputLogButton = document.querySelector("#output-console-log");
outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №6"));
function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

//Наведение на главный заголовок
const mainTitle = document.querySelector(".catalog__title");
mainTitle.addEventListener("mouseenter", () => {
  console.log(mainTitle.textContent);
});

//Кнопка с переключением цвета
const changeColorButton = document.querySelector("#change-color-btn");
changeColorButton.addEventListener("click", () => {
  changeColorButton.classList.toggle("active-color");
});

const coffeeHouse = new Cafe("CoffeHouse", "Москва");
const coffee = new Coffee("Капучино", "Средний", 250, 60, "Арабика");
const tea = new Tea("Зелёный чай", "Большой", 180, 80, "Зелёный");
const lemonade = new Lemonade(
  "Клубничный лимонад",
  "Средний",
  220,
  5,
  "Клубника",
);
coffeeHouse.orderDrink(coffee);
coffeeHouse.orderDrink(tea);
coffeeHouse.orderDrink(lemonade);
console.log(coffee.getInfo());
console.log(coffeeHouse.getInfo());
console.log(coffee.getTemperature());
console.log(coffee.setTemperature(65));
console.log(coffee.getTemperature());
