import { products } from "./products.js";

function createCard(product, index) {
  return `
  <li class="products__item card ${index === 0 ? "products__item--featured" : ""}"> 
    <img
      src="${product.image}"
      alt="${product.imageAlt}"
      class="card__image"
      />
    <span class="card__category ${index === 0 ? "card__category--active" : ""}">${product.category}</span>
    <h2 class="card__name">${product.name}</h2>
    <div class="card__rating">
    <span class="rating__stars">★★★★★</span>
    <span class="rating__value">${product.rating}</span>
    </div>
    <p class="card__description">${product.description} </p>
    <div class="card__compound compound">
      <span class="compound__name">Состав: </span>
      <ul class="compound__list">
      ${product.compound.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
      <div class="card__price">
      <b>Цена</b>
      <span>${product.price} ₽</span>
    </div>
    <button class="card__btn ${index === 0 ? "card__btn--active" : ""}">Купить</button>
  </li>
  `;
}

const productList = document.querySelector(".products");

const productsDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

function getCardsCount() {
  let count;

  while (!Number.isInteger(count) || count < 1 || count > 5) {
    const answer = prompt("Сколько карточек отобразить? От 1 до 5");
    count = Number(answer);
  }
  return count;
}

function renderCards(productsToRender) {
  productList.innerHTML = productsToRender
    .map((product, index) => createCard(product, index))
    .join("");
}

const count = getCardsCount();
renderCards(products.slice(0, count));
