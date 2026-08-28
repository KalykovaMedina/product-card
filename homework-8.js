//№3 Создание объекта пользователя
const myProfile = {
  firstName: "Медина",
  lastName: "Калыкова",
  email: "medina.kalykova@mail.ru",
  age: 17,
  job: "Student",
  country: "Russia",
  city: "Moscow",
  education: "secondary vocational education",
};

//№4 Вложенный объект (Автомобиль + Владелец)
const carData = {
  brand: "Toyota",
  model: "Toyota Camry",
  year: 2022,
  colorCar: "black",
  transmission: "mechanics",
};

carData.owner = myProfile;

//№5 Функция проверки наличия свойства
function checkMaxSpeed(car) {
  if (!("maxSpeed" in car)) {
    //Знак ! означает "НЕ". То есть: "Если maxSpeed не находится в машине...".
    carData.maxSpeed = 200;
  } else {
    return;
  }
}

checkMaxSpeed(carData);
console.log("Проверка скорости:", carData.maxSpeed);

//№6 Универсальная функция вывода свойства
function showProperty(obj, key) {
  console.log(obj[key]);
}

showProperty(myProfile, "city");
showProperty(carData, "model");

//№7 Массив строк
const products = ["Бананы", "Яблоки", "Хлеб", "Молоко"];

//№8 Массив объектов(книги) и метод push
const books = [
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    color: "черный",
    genre: "философская проза",
  },

  {
    title: "Петр Первый",
    author: " Алексей Толстой",
    year: 1945,
    color: "темно-зеленый ",
    genre: "исторический роман",
  },

  {
    title: "Двенадцать стульев",
    author: "Илья Ильф, Евгений Петров",
    year: 1928,
    color: "желтый",
    genre: "сатирический роман, приключения",
  },
];

const newBook = {
  title: "Тихий Дон",
  author: "Михаил Шолохов",
  year: 1940,
  color: "синий",
  genre: "роман-эпопея, историческая драма",
};

books.push(newBook);

//№9 Объединение массивов
const marvelComics = [
  {
    title: "Человек-паук",
    author: "Стэн Ли, Стив Дитко",
    year: 1963,
    genre: "супергероика, приключения",
  },

  {
    title: "Люди Икс",
    author: "Стэн Ли, Джек Кирби ",
    year: 1963,
    genre: "супергероика, фантастика, школьная драма",
  },

  {
    title: "Мстители",
    author: "Стэн Ли, Джек Кирби",
    year: 1963,
    genre: "супергероика, командный боевик",
  },
];

const allBooks = [...books, ...marvelComics];

//№10 Функция с методом map
function markRareBooks(booksArray) {
  // map создает новый массив
  return booksArray.map(function (book) {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}

const rareBooksList = markRareBooks(allBooks);
console.log(rareBooksList);
