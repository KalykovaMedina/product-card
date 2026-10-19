import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";

import { CreamyDessert } from "./Dessert.js";
const dessert = new CreamyDessert("Наполеон", "с ягодами", "заварной ");
dessert.showDessert();

import { Modal } from "./Modal.js";
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
