function weather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура - ${temperature} градуса по Цельсию`,
  );
}

weather("Котельниках", 24);

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);
checkSpeed(2000000);
checkSpeed(299792458);

let product = "bookshelf";
let price = 1000;

function tryToBuy(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    let difference = price - budget;
    console.log(`Вам не хватает ${difference}, пополните баланс`);
  }
}

tryToBuy(1500);
tryToBuy(500);

let myName = "Медина";
let age = "17";
let hobby = "рисовать";

function introduceMyself() {
  console.log(
    `Привет! Меня зовут ${myName}, мне ${age} лет. Очень люблю  ${hobby}`,
  );
}

introduceMyself();
