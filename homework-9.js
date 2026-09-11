import { socialComments } from "./comments.js";

console.log(socialComments);

//Фильтрация по почте
const comComments = socialComments.filter((comment) => {
  return comment.email.includes(".com");
});

console.log(comComments);

//Изменение postld
const updatedComments = socialComments.map((comment) => {
  let newPostId;
  if (comment.id <= 5) {
    newPostId = 2;
  } else {
    newPostId = 1;
  }

  return {
    ...comment,
    postId: newPostId,
  };
});

console.log(updatedComments);

//Оставляем только id и name
const shortComments = socialComments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(shortComments);

//Добаление нового свойства с проверкой
const checkedComments = socialComments.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180, //здесь будет true или false
  };
});

console.log(checkedComments);

const emailReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailReduce);

const emailMap = socialComments.map((comment) => comment.email);
console.log(emailMap);

const getString = emailReduce.toString();
console.log(getString);

console.log(emailMap.join(", "));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = numbers.filter((element) => {
  return element >= 5;
});

console.log(filteredArray);

// Массив строк и проверка наличия элемента
const fruits = ["яблоко", "банан", "апельсин"];
const hasKiwi = fruits.includes("киви");

console.log(hasKiwi);

//Функция для переворота массива
function reverseArray(arr) {
  arr.reverse();
  return arr;
}

reverseArray(numbers);
reverseArray(fruits);

console.log(numbers);
console.log(fruits);
