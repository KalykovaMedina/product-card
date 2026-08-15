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
